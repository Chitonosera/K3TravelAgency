import telebot
import webbrowser
from telebot import types
import re
import requests

waiting_for_phone = {}
waiting_for_tour = {}
user_phone = {}
# name = {}
# country = {}
# date = {}
# place = {}
# price = {}
# services = {}

bot = telebot.TeleBot('6657330380:AAHtfeCcno4rtsoXY7BuGnzPM28MjkZgo4o')

@bot.message_handler(commands=['site','link'])
def site(message):
    webbrowser.open('https://translate.google.com/?sl=en&tl=uk&op=translate')


@bot.message_handler(commands=['tour'])
def tour(message):
    chat_id = message.chat.id
    bot.send_message(chat_id, 'Введіть назву туру, який вам потрібен.')
    waiting_for_tour[chat_id] = True

# Функція для отримання інформації про тур і виведення її
@bot.message_handler(func=lambda message: waiting_for_tour.get(message.chat.id, False))
def handle_tour_request(message):
    chat_id = message.chat.id
    name = message.text  # Отримання назви туру з повідомлення користувача

    url = 'http://localhost:8000/check-tours'  # Впевніться, що це правильний URL для вашого API
    
    data = {'tours': name}

    response = requests.post(url, json=data)

    if response.status_code == 200:
        try:
            data = response.json()
            if 'exists' in data and data['exists']:
                print("Найдено в базі інформацію про тур")
                bot.send_message(chat_id, "Тур з такою назвою існує")
                # Отримайте значення country, date, place, services з відповіді API
                country = data.get('country', 'Не вказано')
                date = data.get('date', 'Не вказано')
                place = data.get('place', 'Не вказано')
                price = data.get('price', 'Не вказано')
                services = data.get('services', 'Не вказано')
                # Виведення отриманих параметрів туру
                response_message = (
                    f'Назва: {name}\n'
                    f'Країна: {country}\n'
                    f'Ціна: {price}\n'
                    f'Дата: {date}\n'
                    f'Місце: {place}\n'
                    f'Сервіси: {services}'
                )
                bot.send_message(chat_id, response_message)

            else:
                print("Не знайдено інформацію про тур в базі даних")
                bot.send_message(chat_id, "Тур з такою назвою не знайдено. Спробуйте ще раз")

        except requests.exceptions.JSONDecodeError:
            print("Помилка розкодування JSON відповіді від сервера")
    else:
        print(f"Помилка запиту: {response}")
        bot.send_message(chat_id, "цього туру не існує")
       
    waiting_for_tour[chat_id] = False  # Позначте, що не чекаєте більше жодного параметру
    
@bot.message_handler(commands=['start'])
def main(message):
    markup = types.InlineKeyboardMarkup()
    markup.add(
        types.InlineKeyboardButton('Перейти на сайт', url='https://translate.google.com/?sl=en&tl=uk&op=translate'))

    row2 = []
    row2.append(types.InlineKeyboardButton('Так', callback_data='yes'))
    row2.append(types.InlineKeyboardButton('Ні', callback_data='no'))
    markup.add(*row2)

    bot.send_message(message.chat.id, f'Привіт! {message.from_user.first_name}, Ви зареєстровані на нашому сайті?',
                     reply_markup=markup)

@bot.callback_query_handler(func=lambda call: call.data == 'yes')
def yes_callback(query):
    chat_id = query.message.chat.id
    bot.send_message(chat_id, "Введіть свій номер телефону.")
    waiting_for_phone[chat_id] = True

@bot.message_handler(func=lambda message: waiting_for_phone.get(message.chat.id, False))
def phone_callback(message):
    chat_id = message.chat.id
    phone_number = message.text

    if re.match(r"^\d{10}$", phone_number):
        user_phone[chat_id] = phone_number

        edit_confirm_markup = types.InlineKeyboardMarkup()
        edit_confirm_markup.row(
            types.InlineKeyboardButton('Редагувати', callback_data='edit'),
            types.InlineKeyboardButton('Підтвердити', callback_data='confirm')
        )

        bot.send_message(chat_id, f"Перевірте ваш номер телефону {phone_number}", reply_markup=edit_confirm_markup)
        waiting_for_phone[chat_id] = False
    else:
        bot.send_message(chat_id, "Введений номер повинен містити тільки 10 цифр. Спробуйте ще раз.")

@bot.callback_query_handler(func=lambda call: call.data == 'edit')
def edit_phone(query):
    chat_id = query.message.chat.id
    bot.send_message(chat_id, "Введіть новий номер телефону.")
    waiting_for_phone[chat_id] = True

@bot.callback_query_handler(func=lambda call: call.data == 'confirm')
def confirm_phone(query):
    chat_id = query.message.chat.id
    phone_number = user_phone.get(chat_id)
    bot.send_message(chat_id, f"Підтверджено номер телефону. Почекайте, доки я шукаю вас в своїх даних...")
    waiting_for_phone[chat_id] = False

    url = 'http://localhost:8000/check-Phone'  # Впевніться, що це правильний URL для вашого API

    data = {'phone': phone_number}

    response = requests.post(url, json=data)

    if response.status_code == 200:
        try:
            data = response.json()
            if 'exists' in response and data['exists']:
                print("Підтверджено номер")
                bot.send_message(chat_id, " Ваш номер підтверджено. Напишіть, будь ласка, назву туру, який вам потрібен.")
            else:
                print("Непідтверджено номер")
        except requests.exceptions.JSONDecodeError:
            print("Помилка розкодування JSON відповіді від сервера")
    else:
        print(f"Помилка запиту: {response.status_code}")
        bot.send_message(chat_id, "Вас не існує в наших даних. Зареєструйтесь на нашому сайті щоб продовжити")
        auth = types.InlineKeyboardMarkup()
        auth.add(
        types.InlineKeyboardButton('Перейти на сайт', url='https://translate.google.com/?sl=en&tl=uk&op=translate'))
        bot.send_message(chat_id, "Для реєстрації перейдіть за посиланням:", reply_markup=auth)


@bot.callback_query_handler(func=lambda call: call.data == 'no')
def no_callback(query):
    chat_id = query.message.chat.id
    bot.send_message(chat_id, "Зареєструйтесь на нашому сайті щоб продовжити")

    auth = types.InlineKeyboardMarkup()
    auth.add(
        types.InlineKeyboardButton('Перейти на сайт', url='https://translate.google.com/?sl=en&tl=uk&op=translate'))

    bot.send_message(chat_id, "Для реєстрації перейдіть за посиланням:", reply_markup=auth)

@bot.message_handler(func=lambda message: message.text == 'Так')
def text_callback(message):
    bot.send_message(message.chat.id, "Ви натиснули кнопку 'Так'. Ось ваше повідомлення.")

@bot.message_handler(content_types=['photo'])
def get_photo(message):
    bot.reply_to(message, 'Яка красива фотографія! Але навіщо вона мені?')

@bot.message_handler(commands=['help'])
def help(message):
    bot.send_message(message.chat.id, 'Доступні команди:\n'
                                    '/start - Почати чат\n'
                                    '/site або /link - Перейти на сайт\n'
                                    '/help - Отримати довідку')

bot.polling(none_stop=True)

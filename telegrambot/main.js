const telegramApi = require('node-telegram-bot-api');
const fetch = require('node-fetch');

const token = '6657330380:AAHtfeCcno4rtsoXY7BuGnzPM28MjkZgo4o';
const apiUrl = 'http://127.0.0.1:8000/api/checkPhone';
const bot = new telegramApi(token, { polling: true });
const chats = {};

const info_options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Ні блять сміюся !', callback_data: 'not'}],
        ]
    })
};

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Запуск'},
        {command: '/info', description: 'Інформація'},
    ]);

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            chats[chatId] = { phone: null };

            const startOptions = {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [{ text: 'Так' }],
                        [{ text: 'Ні' }],
                    ],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                })
            };
            return bot.sendMessage(chatId, 'Ви зареєстровані на нашому сайті?', startOptions);
        }

        if (text === 'Так') {
            const phoneNumberOptions = {
                reply_markup: JSON.stringify({
                    force_reply: true,
                })
            };
            return bot.sendMessage(chatId, 'Будь ласка, введіть свій номер телефону:', phoneNumberOptions);
        }

        if (text === 'Ні') {
            return bot.sendMessage(chatId, 'Шкода, що ви не готові. Можливо, наступного разу!');
        }

        if (chats[chatId]) {
            chats[chatId].phone = text;
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phone: text,
                    }),
                });
            
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            
                const responseData = await response.json();
            
                if (responseData.success) {
                    // Успішна перевірка номера телефону
                    return bot.sendMessage(chatId, 'Номер телефону перевірений і валідний. Доступ надано!');
                } else {
                    // Невдача у перевірці номера телефону
                    return bot.sendMessage(chatId, 'Номер телефону не знайдено або невірний. Спробуйте ще раз.');
                }
            } catch (error) {
                console.error('Помилка при виклику API Laravel:', error.message);
                return bot.sendMessage(chatId, 'Виникла помилка при перевірці номера телефону. Будь ласка, спробуйте пізніше.');
            }
            
        }
        return bot.sendMessage(chatId, 'Чел, що ти висрав?');
    });
};

start();

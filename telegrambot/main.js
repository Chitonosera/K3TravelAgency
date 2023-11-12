const telegramApi = require('node-telegram-bot-api');

const token = '6657330380:AAHtfeCcno4rtsoXY7BuGnzPM28MjkZgo4o';

const apiUrl = '';

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
            return bot.sendMessage(chatId, 'Ви зараестровані на нашому сайті?', startOptions);
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
            chats[chatId].phone = phone_number;
            
            try {
                const response = await axios.post(apiUrl, {
                    phone_number: text,
                });
                const status = response.data.status;
                const message = response.data.message;
                return bot.sendMessage(chatId, `${message}. Статус: ${status}`);
            } catch (error) {
                console.error('Помилка при виклику API Laravel:', error.message);
                return bot.sendMessage(chatId, 'Виникла помилка при перевірці номера телефону. Будь ласка, спробуйте пізніше.');
            }
        }

        return bot.sendMessage(chatId, 'Чел, що ти висрав?');
    });
};
//npm install axios
//npm install node-telegram-bot-api nodemon

start();
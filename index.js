const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = '1969345963:AAG40i-mcteThs7z0lD-0MD6dG2c0bhAu64'; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, {polling: true});

//конфиг клавиатуры
const keyboard = [
    [
      {
        text: 'Хорошо', // текст на кнопке
        callback_data: 'user_ok' // данные для обработчика событий
      }
    ],
    [
      {
        text: 'Узнать',
        callback_data: 'user_know'
      }
    ],
    // [
    //     {
    //       text: 'Хочу песика',
    //       callback_data: 'morePes'
    //     }
    // ],
  ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'Здравствуйте, это калькулятор субсидий 😊', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    // let img = '';

    if (query.data === 'user_ok') { // если кот
        // img = 'keks.jpg';
        bot.sendMessage(chatId, 'Я помогу узнать положена ли вам субсидия или нет', { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }

    if (query.data === 'user_know') {
        bot.sendMessage(chatId, 'Я помогу узнать положена ли вам субсидия или нет', {
            // alert("Пожалуйста введите слудующие данные:");
        });
    }

    // if (query.data === 'morePes') { // если пёс
    //     img = 'pes.jpg';
    // }

    // if (img) {
    //     bot.sendPhoto(chatId, img, { // прикрутим клаву
    //         reply_markup: {
    //             inline_keyboard: keyboard
    //         }
    //     });
    // } else {
    //     bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
    //         reply_markup: {
    //             inline_keyboard: keyboard
    //         }
    //     });
    // }
  });

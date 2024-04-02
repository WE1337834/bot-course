const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const fs = require('fs')
const Token = '6416730656:AAF0cMFBSm9wlnz0QZzK4n0kT9IaYJ6aKXs'
const cryptomus = '417f86c8-ec07-4c3b-8c71-40bf52b125a2'
console.log('Bot has been started...')
const bot = new TelegramBot(Token, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			timeout: 10,
		},
	},
})
const privilege = [
	[
		{
			text: 'VIP',
			callback_data: 'vip',
		},
	],
	[
		{
			text: 'S-VIP',
			callback_data: 's_vip',
		},
	],
	[
		{
			text: 'Premium',
			callback_data: 'premium',
		},
	],
]
const vip = [
	[
		{
			text: '7 дней - 50р',
			callback_data: 'vip7-60',
		},
	],
	[
		{
			text: '30 дней - 150р',
			callback_data: 'vip30-150',
		},
	],
	[
		{
			text: '180 дней - 200р',
			callback_data: 'vip180-200',
		},
	],
	[
		{
			text: 'Навсегда - 250р',
			callback_data: 'vipinf-250',
		},
	],
	[
		{
			text: 'Назад',
			callback_data: 'back',
		},
	],
]
const s_vip = [
	[
		{
			text: '7 дней - 200р',
			callback_data: 's_vip7-200',
		},
	],
	[
		{
			text: '30 дней - 270р',
			callback_data: 's_vip30-270',
		},
	],
	[
		{
			text: '180 дней - 340р',
			callback_data: 's_vip180-340',
		},
	],
	[
		{
			text: 'Навсегда - 390р',
			callback_data: 's_vipinf-390',
		},
	],
	[
		{
			text: 'Назад',
			callback_data: 'back',
		},
	],
]
const premium = [
	[
		{
			text: '7 дней - 350р',
			callback_data: 'premium7-350',
		},
	],
	[
		{
			text: '30 дней - 390р',
			callback_data: 'premium30-390',
		},
	],
	[
		{
			text: '180 дней - 439р',
			callback_data: 'premium180-439',
		},
	],
	[
		{
			text: 'Навсегда - 500р',
			callback_data: 'premiuminf-500',
		},
	],
	[
		{
			text: 'Назад',
			callback_data: 'back',
		},
	],
]
bot.onText(/\/start/, msg => {
	const id = msg.chat.id
	console.log(msg.chat.id)
	console.log(msg.text)
	bot.sendMessage(id, 'Введите команду /pay, для покупок привилегий')
})
bot.onText(/\/pay/, msg => {
	const id = msg.chat.id
	console.log(msg.chat.id)
	console.log(msg.text)
	bot.sendMessage(id, 'Какую привилегию хотите приобрести?', {
		reply_markup: {
			inline_keyboard: privilege,
		},
	})
})
//167120:AArcmnFsj7X1iQjmuvPxsvpu046F3S7BT7U
bot.on('callback_query', query => {
	const { chat, message_id } = query.message
	const data = query.data
	switch (data) {
		case 'vip':
			bot.editMessageText('На сколько хотите приобрести VIP:', {
				chat_id: chat.id,
				message_id: message_id,
				reply_markup: { inline_keyboard: vip },
			})
			break
		case 's_vip':
			bot.editMessageText('На сколько хотите приобрести S-VIP:', {
				chat_id: chat.id,
				message_id: message_id,
				reply_markup: { inline_keyboard: s_vip },
			})
			break
		case 'premium':
			bot.editMessageText('На сколько хотите приобрести Premium:', {
				chat_id: chat.id,
				message_id: message_id,
				reply_markup: { inline_keyboard: premium },
			})
			break
		case 'back':
			bot.editMessageText('Какую привилегию хотите приобрести?', {
				chat_id: chat.id,
				message_id: message_id,
				reply_markup: { inline_keyboard: privilege },
			})
			break

		case 'vip7-60':
			bot
				.sendInvoice(
					chat.id,
					'VIP',
					'VIP - 7 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'VIP - 7 дней',
							amount: 6000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата VIP - 7 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 'vip30-150':
			bot
				.sendInvoice(
					chat.id,
					'VIP',
					'VIP - 30 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'VIP - 30 дней',
							amount: 15000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата VIP - 30 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 'vip180-200':
			bot
				.sendInvoice(
					chat.id,
					'VIP',
					'VIP - 180 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'VIP - 180 дней',
							amount: 20000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата VIP - 180 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 'vipinf-250':
			bot
				.sendInvoice(
					chat.id,
					'VIP',
					'VIP - Навсегда',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'vip',
							amount: 25000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата VIP - навсегда прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break

		case 's_vip7-200':
			bot
				.sendInvoice(
					chat.id,
					'S-VIP',
					'S-VIP - 7 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 's_vip',
							amount: 20000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата S-VIP - 7 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 's_vip30-270':
			bot
				.sendInvoice(
					chat.id,
					'S-VIP',
					'S-VIP - 30 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 's_vip',
							amount: 27000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата S-VIP - 30 прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 's_vip180-340':
			bot
				.sendInvoice(
					chat.id,
					'S-VIP',
					'S-VIP - 180 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 's_vip',
							amount: 34000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата S-VIP - 180 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 's_vipinf-390':
			bot
				.sendInvoice(
					chat.id,
					'S-VIP',
					'S-VIP - Навсегда',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 's_vip',
							amount: 39000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата S-VIP - навсегда прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break

		case 'premium7-350':
			bot
				.sendInvoice(
					chat.id,
					'Premium',
					'Premium - 7 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'premium',
							amount: 35000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата Premium - 7 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 'premium30-390':
			bot
				.sendInvoice(
					chat.id,
					'Premium',
					'Premium - 30 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'premium',
							amount: 39000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата Premium - 30 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 'premium180-439':
			bot
				.sendInvoice(
					chat.id,
					'Premium',
					'Premium - 180 дней',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'premium',
							amount: 43900,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата Premium - 180 дней прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
		case 'premiuminf-500':
			bot
				.sendInvoice(
					chat.id,
					'Premium',
					'Premium - Навсегда',
					'payload',
					'381764678:TEST:81737',
					'RUB',
					[
						{
							label: 'premium',
							amount: 50000,
						},
					],
					{
						need_name: true,
					}
				)
				.then(msg => {
					const invoiceMessageId = msg.message_id

					const updatedText = 'Оплата Premium - навсегда прошла успешно.'

					bot.editMessageText(chat.id, invoiceMessageId, null, updatedText)
				})
			break
	}
})

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Transaction.destroy_all
User.destroy_all
demo_user = User.create(username: 'demo', password: '123456')
user1 = User.create(username: 'Jordan', password: '123456')
user2 = User.create(username: 'Danny', password: '123456')
user3 = User.create(username: 'Jeff', password: '123456')
user4 = User.create(username: 'Henry', password: '123456')
user5 = User.create(username: 'Chris', password: '123456')

trans1 = Transaction.create(amount: 50, body: 'food', payer_id: user2.id, recipient_id: user1.id)
trans2 = Transaction.create(amount: 20, body: 'gas', payer_id: user5.id, recipient_id: user3.id)
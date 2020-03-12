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
user6 = User.create(username: 'James', password: '123456')
user7 = User.create(username: 'Nathan', password: '123456')
user8 = User.create(username: 'Ezra', password: '123456')
user9 = User.create(username: 'Stephane', password: '123456')
user10 = User.create(username: 'Wilson', password: '123456')

# trans1 = Transaction.create(amount: 50, body: 'food', payer_id: user2.id, recipient_id: user1.id)
# trans2 = Transaction.create(amount: 20, body: 'gas', payer_id: user5.id, recipient_id: user3.id)
# trans3 = Transaction.create(amount: 10, body: 'Getting 3 stocked', payer_id: user1.id, recipient_id: user2.id)
# trans4 = Transaction.create(amount: 13, body: 'Basic Banh mi', payer_id: user1.id, recipient_id: user3.id)
# trans5 = Transaction.create(amount: 20, body: 'Best ramen ever', payer_id: user5.id, recipient_id: user4.id)
# trans6 = Transaction.create(amount: 48, body: 'Crunchyroll membership', payer_id: user8.id, recipient_id: user7.id)

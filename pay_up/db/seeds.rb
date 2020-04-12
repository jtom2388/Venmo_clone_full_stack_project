# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user.user_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'user_photos', "user#{idx}.jpg")), filename: ("user_#{idx}.jpg")) 
require 'open-uri'
Transaction.destroy_all
User.destroy_all
demo_user = User.create(username: 'demo', password: '123456')
demo_user.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo_demo = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# demo_user.profile_photo.attach(io: photo_demo, filename:'Default-Profile-Picture.png')

user1 = User.create(username: 'Jordan', password: '123456')
user1.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo1 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user1.profile_photo.attach(io: photo1, filename:'Default-Profile-Picture.png')

user2 = User.create(username: 'Danny', password: '123456')
user2.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo2 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user2.profile_photo.attach(io: photo2, filename:'Default-Profile-Picture.png')

user3 = User.create(username: 'Jeff', password: '123456')
user3.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo3 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user3.profile_photo.attach(io: photo3, filename:'Default-Profile-Picture.png')

user4 = User.create(username: 'Henry', password: '123456')
user4.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo4 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user4.profile_photo.attach(io: photo4, filename:'Default-Profile-Picture.png')

user5 = User.create(username: 'Chris', password: '123456')
user5.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo5 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user5.profile_photo.attach(io: photo5, filename:'Default-Profile-Picture.png')

user6 = User.create(username: 'James', password: '123456')
user6.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo6 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user6.profile_photo.attach(io: photo6, filename:'Default-Profile-Picture.png')

user7 = User.create(username: 'Nathan', password: '123456')
user7.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo7 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user7.profile_photo.attach(io: photo7, filename:'Default-Profile-Picture.png')

user8 = User.create(username: 'Ezra', password: '123456')
user8.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo8 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user8.profile_photo.attach(io: photo8, filename:'Default-Profile-Picture.png')

user9 = User.create(username: 'Stephane', password: '123456')
user9.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo9 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user9.profile_photo.attach(io: photo9, filename:'Default-Profile-Picture.png')

user10 = User.create(username: 'Wilson', password: '123456')
user10.profile_photo.attach(io: File.open(Rails.root.join('lib', 'seeds', 'Default-Profile-Picture.png')), filename: 'Default-Profile-Picture.png')
# photo10 = open('https://payup-aa-seed.s3-us-west-1.amazonaws.com/Default-Profile-Picture.png')
# user10.profile_photo.attach(io: photo10, filename:'Default-Profile-Picture.png')

trans1 = Transaction.create(amount: 50, body: 'food', payer_id: user2.id, recipient_id: user1.id)
trans2 = Transaction.create(amount: 20, body: 'gas', payer_id: user5.id, recipient_id: user3.id)
trans3 = Transaction.create(amount: 10, body: 'Getting 3 stocked', payer_id: user1.id, recipient_id: user2.id)
trans4 = Transaction.create(amount: 13, body: 'Basic Banh mi', payer_id: user1.id, recipient_id: user3.id)
trans5 = Transaction.create(amount: 20, body: 'Best ramen ever', payer_id: user5.id, recipient_id: user4.id)
trans6 = Transaction.create(amount: 48, body: 'Crunchyroll membership', payer_id: user8.id, recipient_id: user7.id)

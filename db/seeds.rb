# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

molly = User.create(
  first_name: "Molly",
  last_name: "McCarron",
  email: "mccarronmollye@gmail.com"
)

first = Log.create(
  learned: "React Routes",
  unsure: "Redux Global Store",
  goals_accomplished: "Set up Rails backend for final project",
  goals_tomorrow: "Create log compoenents",
  date: "5/4/19",
  mood: "happy",
  title: "Day 1 of #100DaysOfCode",
  user_id: 1
)

second = Log.create(
  learned: "mapStateToProps",
  unsure: "N/A",
  goals_accomplished: "Completed Log compnents",
  goals_tomorrow: "Link Log UI to backen",
  date: "5/5/19",
  mood: "neutral",
  title: "Day 2 of #100DaysOfCode",
  user_id: 1
)

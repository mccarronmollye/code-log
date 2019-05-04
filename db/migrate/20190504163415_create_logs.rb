class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.string :learned
      t.string :unsure
      t.string :goals_accomplished
      t.string :goals_tomorrow
      t.string :date
      t.string :mood
      t.string :title

      t.timestamps
    end
  end
end

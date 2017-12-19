class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :word, null: false
      t.integer :user_id, null: false
      t.string :primary_definition, null: false
      t.string :pos_one, null: false
      t.string :secondary_definition
      t.string :pos_two
      t.string :tertiary_definition
      t.string :pos_three

      t.timestamps
    end
    add_index :words, :word
  end
end

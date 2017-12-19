class CreateSentences < ActiveRecord::Migration[5.1]
  def change
    create_table :sentences do |t|
      t.string :sentence, null: false
      t.integer :user_id, null: false
      t.integer :word_id, null: false

      t.timestamps
    end
  end
end

class CreateSentenceLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :sentence_likes do |t|
      t.integer :sentence_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end

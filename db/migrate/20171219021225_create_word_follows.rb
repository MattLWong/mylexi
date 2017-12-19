class CreateWordFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :word_follows do |t|
      t.integer :follower_id, null: false
      t.integer :word_id, null: false

      t.timestamps
    end
  end
end

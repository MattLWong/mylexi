class AddUsernameToUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.remove :email
      t.remove :last_name
      t.string :username, null: false
    end
  end
end

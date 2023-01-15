class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :business
      t.string :email
      t.integer :phone
      t.text :about

      t.timestamps
    end
  end
end

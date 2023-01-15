class AddBoxesToContacts < ActiveRecord::Migration[7.0]
  def change
    add_column :contacts, :boxes, :text, array: true, default: []
  end
end

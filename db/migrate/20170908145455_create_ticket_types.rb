class CreateTicketTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :ticket_types do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end

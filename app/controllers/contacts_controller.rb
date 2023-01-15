class ContactsController < ApplicationController
  #skip_before_action :authenticate_user!
  before_action :authenticate_user!, only: :index

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.create(contact_params)
    #sleep(1)
    #redirect_to root_path
  end

  def index
    @contacts = Contact.all.reverse
  end

  private

  def set_contact
  end

  def contact_params
    params.require(:contact).permit(:name, :business, :email, :phone, :about, boxes: [])
  end

end

class Admin::EventsController < AdminController
  include CrudConcern

  before_action :find_event, only: [:edit, :update, :destroy]
  

  def index
    # @events = Event.all
    @events = index_helper("Event")
  end

  def new
    @event = Event.new
    @event.lectures.build
  end

  def create
    @event = Event.new(event_params)
    create_helper(@event, "edit_admin_event_path")
  end

  def update
    update_helper(@event, "edit_admin_event_path", event_params)
  end

  def edit
    if @event.lectures.empty?
      @event.lectures.build
    end
  end

  def destroy
    destroy_helper(@event, "admin_events_path")
  end

  private

  def find_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(Event.attribute_names.map(&:to_sym).push(
      lectures_attributes: [:id, :_destroy, :event_id, :timeframe, :title, :description, :speaker_ids ] ))
  end

end


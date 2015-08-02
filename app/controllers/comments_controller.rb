class CommentsController < ApplicationController
  before_action :find_post

  def new
    @comment = @post.comments.new(comment_params)
    @comment.save
  end

  def create
    @comment = @post.comments.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment, notice: 'Comment was successfully created.' }
        format.js   {}
        # format.json { render json: @comment, status: :created, location: @post }
      else
        format.html { render action: "new" }
        # format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
		@comment = @post.comments.find(params[:id])
		@comment.destroy
		redirect_to post_path(@post)
  end

  def show
  end

  def index
    @comments = @post.comments.all
  end

  private
  
  def find_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:name, :body)
  end
end

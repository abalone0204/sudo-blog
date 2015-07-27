class PostsController < ApplicationController
  def index
    @name = "首頁"
    @posts = Post.all
  end

  def new
    @name = "新增文章"
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.save

    redirect_to :action => :index
  end

  def show
    @post = Post.find(params[:id])
    @comment = @post.comments
    @contents = @post.comments.all
    respond_to do |format|
      format.html
      format.js
    end
  end

  def edit
    @post = Post.find(params[:id])

  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to @post
    else
      render 'edit'
    end
  end


  private

  def post_params
    params.require(:post).permit(:title, :content,:author)
  end
end

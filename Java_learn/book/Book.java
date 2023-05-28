class Book {


    private String title;
    private String author;
    private String isbn;

    //getter method
    public String getTitle(){
        return title;
    }
    public String getAuthor(){
        return author;
    }
    public String getIsbn(){
        return isbn;
    }


    //setter method 
    public void setTitle(String title){
        this.title = title;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public void setIsbn(String isbn){
        this.isbn = isbn;
    }



    public static void main(String[] args){
        System.out.println("I came in");

    }

    
}
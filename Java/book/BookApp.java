import java.util.*;


public class BookApp {
    public static void main(String[] args) {
        BookList bookManager = new BookManager();
        Scanner scanner = new Scanner(System.in);
        while (true){
        // display menu with options for adding, viewing, and deleting books, as well as searching for books by title or author
        System.out.println("pick your desired option:\nAdd book\nview Book\nDelete Book\nsearch title");
        String option_choosed = scanner.nextLine();
        if (option_choosed.equals("add book")){
            System.out.println("book title?");
            String title = scanner.nextLine();
            System.out.println("book author?");
            String author = scanner.nextLine();
            System.out.println("book isbn?");
            String isbn = scanner.nextLine();
            
            Book book = new Book();
            book.setTitle(title);
            book.setAuthor(author);
            book.setIsbn(isbn);
            bookManager.addBook(book);
        }
        else if (option_choosed.equals("search title")){
            System.out.println("book title?");
            String title = scanner.nextLine();
            bookManager.searchByTitle(title);

        } 
        else if (option_choosed.equals("delete book")){
            System.out.println("anything?");
            String title = scanner.nextLine();
            bookManager.deleteBook(title);

        } 
        
        
        else{
            scanner.close();
            break;
        }
    }

    }
}
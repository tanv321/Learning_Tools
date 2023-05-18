import java.util.List;

public interface BookList {
    void addBook(Book book);
    void viewBook(String isbn);
    void deleteBook(String isbn);
    List<Book> searchByTitle(String title);
    List<Book> searchByAuthor(String author);
    List<Book> getAllBooks();

}
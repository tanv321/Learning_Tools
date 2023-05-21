
import java.util.List;
import java.util.ArrayList;

/*- Create a Java class called "EmailClient" that represents an email client application.
 The class should have methods to send an email, receive emails, and display the inbox.
  Enhance the class to include features such as organizing emails into folders, 
  searching for specific emails */
public class EmailClient {

    private List<String>  inbox;
    private List<String> folders;


    public  EmailClient(List<String> inbox,List<String> folders){
        this.inbox = new ArrayList<>(inbox);
        this.folders = new ArrayList<>(folders);
    }


    public static void sendEmail(EmailClient emailClient, String recipient, String body){
        
        String email = "To: "+ recipient +"\nmessage:\n"+body;
        recieveEmails(emailClient, email);

    }

    public static void recieveEmails(EmailClient emailClient, String email){
        emailClient.inbox.add(email);

    }

    public static void displayInbox(EmailClient emailClient){
        List<String> inbox = emailClient.inbox;
        for (String email : inbox){
            System.out.println(email);
        }
    }

    public static void createFolder(EmailClient emailClient, String folderName){
        emailClient.folders.add(folderName);
    }

    public static void searchEmails(EmailClient emailClient, String name_search){

        List<String> inbox = emailClient.inbox;
        for(String email: inbox){
            if (email.startsWith(name_search, 4)){
                System.out.println("Found name here is the content: \n" + email);

            }
        }
        
        
    }


    public static void main(String[] args) {
        EmailClient emailClient = new EmailClient(new ArrayList<>(), new ArrayList<>());

        sendEmail(emailClient,"Michael", "hey how are you");
        sendEmail(emailClient,"Johnny", "Are you free this weeknd");
        sendEmail(emailClient,"Ron", "Hmm i may not be going");

        
        displayInbox(emailClient);

        createFolder(emailClient, "Humungous");
        createFolder(emailClient, "smally");
        

        searchEmails(emailClient, "Johnny");

        
    
    }
}

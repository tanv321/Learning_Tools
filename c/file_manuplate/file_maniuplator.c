#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LENGTH 100

struct map{
    char key[MAX_LENGTH];
    int value;
};


int main(int argc, char *argv[]) {
   if (argc <= 1 || argc >=3){
          printf("Only two arguments allowed, 'program filename.txt'\n");
   }
   
   char *filename = ("./%s",argv[1]);
   
   FILE *fptr;
   fptr = fopen(filename,"r");

   char line[256];

   if(fptr == NULL)
   {
      printf("Error!");   
      return 0;          
   }

  struct map myMap[MAX_LENGTH];
  
  char** ptr;
  ptr = (char**)malloc(sizeof(char*) * 100);
   int n = 0;
   while (fgets(line, sizeof(line), fptr)) {
        printf("%s", line); 
        ptr[n] = (char*)malloc(sizeof(char) * (strlen(line) + 1));
        strcpy(ptr[n], line);
        n+=1;

    }
    
    fclose(fptr);
 
    for(int i = 0; i < 10; i++) {
      printf("woah their cleo\n");
      printf("%s", ptr[i]);
    }

   return 0;
}

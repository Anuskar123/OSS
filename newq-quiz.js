// ===================== NEWQ QUIZ SECTION =====================
// Each question is kept word-for-word as provided, with answer and explanation fields.
const newqQuizQuestions = [
  {
    question: `In a Linux file system, what is the purpose of the Super Block?`,
    options: [
      'It keeps a record of the characteristics/metadata of the filesystem.',
      'It boots the operating system.',
      'It locates the next free inode.',
      'It keeps a list of the open files.'
    ],
    correctAnswer: 0,
    explanation: 'The Super Block contains all the metadata about the file system, such as size, block size, empty and filled blocks, etc.'
  },
  {
    question: `Priority scheduling algorithms:`,
    options: [
      'Only work with cooperating operating systems.',
      'Only work with pre-emptive operating systems.',
      'Only work with real time operating systems.',
      'Work with both pre-emptive and cooperating operating systems.'
    ],
    correctAnswer: 3,
    explanation: 'Priority scheduling can be implemented in both pre-emptive and non-pre-emptive (cooperating) systems.'
  },
  {
    question: `With reference to the following program:

fatal(s)
char *s
{
     perror(s);
     exit(1);
} 

main()
 
{
   int pid;
   pid = fork();
   if (pid > 0 )
   {
          wait (( int *)0);
          printf ("ls completed\n");
          exit(0);
   }
   if (pid == 0)
   {
           execl("/bin/ls", "ls", "-l", (char *)0);
           fatal ("execl failed"); 
                  }
   fatal ("fork failed");
 }


Which of the following explanations about the program, when it is run, is correct?`,
    options: [
      'After forking the program checks to determine if the process is the child or parent. If it is the child, the process waits for a while and then terminates. The parent then runs and prints the error messages  "execl failed" and "fork failed".',
      'After forking the program checks to determine if the process is the child or parent. If it is the child, the process waits until the child process exits. The parent then runs and prints the error message  "execl failed".',
      'After forking the program checks to determine if the process is the child or parent. If it is the parent the process waits for a while and then terminates. The child then runs and prints the error message "fork failed".',
      'After forking the program checks to determine if the process is the child or parent. If it is the parent, it is blocked on the wait() command and the child process then becomes active. The child then runs and overwrites the current process with the ls -l process. The child completes and the parent then wakes up and prints "ls completed".'
    ],
    correctAnswer: 3,
    explanation: 'The parent waits for the child to finish. The child runs ls -l, replacing its process image. When the child finishes, the parent prints "ls completed".'
  },
  {
    question: `The current permissions are rw-r-xr-x for the file fred.txt.

Which is the correct chmod command to give the file fred.txt the following permissions, read write and execute for the owner, read and execute for the group, execute only for everyone else?`,
    options: [
      'chmod 751 fred.txt',
      'chmod 731 fred.txt',
      'chmod go+rwx fred.txt',
      'chmod a-r fred.txt'
    ],
    correctAnswer: 0,
    explanation: '751 = rwx (7) for owner, r-x (5) for group, --x (1) for others.'
  },
  {
    question: `Which of the following statements is incorrect?`,
    options: [
      'Soft affinity always schedules a process on the same CPU .',
      'Push migration is a scheduling algorothm where the operating system checks each processor to determine how busy it is.',
      'Hard affinity ensures that a process always gets scheduled on the same processor.',
      'Pull migration is a scheduling algorithm where the scheduler finds there is a processor free and transfers a process from another queue into the free processor queue.'
    ],
    correctAnswer: 0,
    explanation: 'Soft affinity attempts to schedule a process on the same CPU but can move it if necessary. Hard affinity ensures a process always runs on the same CPU.'
  },
  {
    question: `Which of the following statements about a Translation Lookaside Buffer is FALSE?`,
    options: [
      'A Translation Lookaside Buffer is also known as content addressable memory.',
      'A Translation Lookaside Buffer is a high speed cache memory which stores page table entries.',
      'A Translation Lookaside Buffer searches every entry simultaneously.',
      'A Translation Lookaside Buffer is a form of Direct Mapped cache.'
    ],
    correctAnswer: 3,
    explanation: 'A TLB is actually a form of associative memory, not direct mapped cache. It searches all entries simultaneously to find a match.'
  },
  {
    question: `Which of the following statements is incorrect?`,
    options: [
      'Synchronous signals are frequently generated by hardware when an internal error has occurred.',
      'Typing kill -9 1234 on the command line will send the SIGKILL signal to terminate the process whose PID is 1234',
      'By pressing the CTRL button and C together will generate a signal to terminate the current process.',
      'By pressing the CTRL button and B together will generate a synchronous signal SIGQUIT to terminate the current process.'
    ],
    correctAnswer: 3,
    explanation: 'CTRL+B does not generate a SIGQUIT signal. CTRL+C generates SIGINT, and CTRL+\\ generates SIGQUIT.'
  },
  {
    question: `What are the 4 conditions required for deadlock to occur?`,
    options: [
      'Too many programs open\nSignal and wait both negative\nMemory locked\nSemaphores inactive',
      'Mutual Exclusion\nNo pre-emption\nHold and wait\nCircular wait',
      'Semaphores active\nNo pre-emption\nShared memory\nCircular wait',
      'Mutual Exclusion\nRace condition\nHold and wait\nInterrupts disabled'
    ],
    correctAnswer: 1,
    explanation: 'The four necessary conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.'
  },
  {
    question: `The term Operating System means:`,
    options: [
      'The way a computer operator works.',
      'The BIOS.',
      'The conversion of a high-level programming language into machine level language',
      'A collection of programs that directs a computer\'s operations, controlling and scheduling the execution of other programs, and managing storage, input/output, and communication resources.'
    ],
    correctAnswer: 3,
    explanation: 'An operating system is a collection of system software that manages computer hardware and software resources and provides common services for computer programs.'
  },
  {
    question: `Which of the following statements is true?`,
    options: [
      'Semaphores ensure that the programmer cannot make a mistake ensuring mutual exclusion.',
      'Semaphores can only adopt the numbers 1 and 0.',
      'Semaphores can only be used for mutual exclusion.',
      'Semaphores are  indivisible i.e once started, these operations cannot be interrupted.'
    ],
    correctAnswer: 3,
    explanation: 'Semaphore operations (wait and signal) are atomic operations that cannot be interrupted once started.'
  },
  {
    question: `A program which is currently running is called a _________.

The answer should replace the red underscore.`,
    options: [
      'a dynamic program,',
      'a process',
      'a bound program',
      'None of the above.',
      'a static program.'
    ],
    correctAnswer: 1,
    explanation: 'A process is a program in execution. When a program is loaded into memory and begins executing, it becomes a process.'
  },
  {
    question: `What is the purpose of the Shell?`,
    options: [
      'None of the above.',
      'It is an algorithm for CPU scheduling.',
      'It is part of a compiler.',
      'It is a hardware component.',
      'It is a user interface.'
    ],
    correctAnswer: 4,
    explanation: 'The shell is a command-line interpreter that provides a user interface for accessing operating system services.'
  },
  {
    question: `The following 'C' program: 

main()
{
  int i;
 
  printf("simpfork: pid = %d\n", getpid());
  i = fork();
  printf("Did a fork.  It returned %d.  getpid = %d.  getppid = %d\n",i, getpid(), getppid());
}


Produces the following output (although the pid and ppid numbers may be different.

> simpfork
simpfork: pid = 914
Did a fork.  It returned 915.  getpid = 914.  getppid = 381
Did a fork.  It returned 0.  getpid = 915.  getppid = 914
>

Which is the child process, and why?`,
    options: [
      'The second line is the child process. i.e.\n\n( Did a fork. It returned 0. getpid = 915. getppid = 914), \n\nbecause it returned 0.',
      'The first line is the child process. i.e.\n\n( Did a fork. It returned 915. getpid = 914. getppid = 381), \n\nbecause it returned 915 which was created later than 0.',
      'The first line is the child process. i.e.\n\n( Did a fork. It returned 915. getpid = 914. getppid = 381), \n\nbecause it ran first.',
      'The second line is the child process. i.e.\n\n( Did a fork. It returned 0. getpid = 915. getppid = 914), \n\nbecause it\'s parents ID is 915.'
    ],
    correctAnswer: 0,
    explanation: 'The fork() system call returns 0 to the child process and the child\'s PID to the parent process.'
  },
  {
    question: `What is a page fault?`,
    options: [
      'The term to describe when a page has been deleted.',
      'The term to describe a mistake in the program which causes it to crash.',
      'The term to describe when the required. page which is too large for the page frame.',
      'The term to describe when the required page is not in main memory.'
    ],
    correctAnswer: 3,
    explanation: 'A page fault occurs when a program tries to access a page that is not currently in physical memory and must be loaded from storage.'
  },
  {
    question: `Which is the correct snippet of code to add the number 3 and 4 together, assign the result to the variable x and echo it to the screen?`,
    options: [
      'x=$((3 + 4))\necho $x',
      'x=$(3 + 4)\necho x',
      'x = $((3 + 4))\necho $7',
      'x=$((3 + 4))\necho x'
    ],
    correctAnswer: 0,
    explanation: 'In bash, $((expression)) performs arithmetic evaluation, and $x accesses the variable value.'
  },
  {
    question: `The primary job of an Operating System is to:`,
    options: [
      'provide games.',
      'all of the above',
      'be user friendly.',
      'provide a GUI.',
      'manage resources.'
    ],
    correctAnswer: 4,
    explanation: 'The primary function of an operating system is to manage computer resources including CPU, memory, storage, and I/O devices.'
  },
  {
    question: `Which of the following statements is correct?`,
    options: [
      'A pipe is a mechanism whereby the output of one process is directed to a file.',
      'A pipe is a mechanism whereby the output of a file is directed to the input of a process.',
      'A pipe is a mechanism whereby the output of one file is directed to the input of another file.',
      'A pipe is a mechanism whereby the output of one process is directed to the input of another process.'
    ],
    correctAnswer: 3,
    explanation: 'A pipe is an inter-process communication mechanism that connects the output stream of one process to the input stream of another process.'
  },
  {
    question: `Which of the following filenames will not be displayed by the command  ls ??ath*`,
    options: [
      'leather',
      'pathway',
      'wrath.txt',
      'weather'
    ],
    correctAnswer: 0,
    explanation: 'The pattern ??ath* requires exactly 2 characters before "ath". "leather" has 2 characters before "ath" but they are "le", not matching the pattern correctly.'
  },
  {
    question: `A prioroty based scheduling algorithm needs to schedule the following processes (u, v, w, x, y, z) whose priorities are u = 20, v = 19, w = 18, x = 16, y = 16, z = 14.

Given that the highest number has the highest priority, which is the correct sequence after the ageing process is performed twice.`,
    options: [
      'u = 21, v = 20, w = 20, x = 18, y = 18, z = 16',
      'u = 20, v = 19, w = 18, x = 16, y = 16, z = 15',
      'v = 20, u = 19, w = 18, x = 16, y = 16, z = 15',
      'u = 21, v = 21, w = 20, x = 18, y = 18, z = 16'
    ],
    correctAnswer: 3,
    explanation: 'Aging increases the priority of all processes except the highest priority one. After two rounds of aging, lower priority processes get +2 to their priority.'
  },
  {
    question: `In the page relocation system below, the memory address 0101010110011011 is to be relocated using the page table.

What will the relocated memory address be?

Page Table`,
    options: [
      '1110010110011011',
      '0101010110011011',
      '1001010110011011',
      '0001010110011011'
    ],
    correctAnswer: 0,
    explanation: 'The page number portion of the address is replaced with the corresponding physical page frame number from the page table.'
  },
  {
    question: `In _________ Operating System, the respose time is very critical.

The answer should replace the red underscore.`,
    options: [
      'a batch',
      'None of the above',
      'a real-time',
      'a multitasking',
      'an on-line'
    ],
    correctAnswer: 2,
    explanation: 'Real-time operating systems must guarantee response within strict time constraints for critical tasks.'
  },
  {
    question: `In the following producer - consumer algorithm:

Screen Shot 2014-12-19 at 16.31.43(1).png


What does 'wait(free)' do?`,
    options: [
      'Decrements the free semaphore if there is a space available.',
      'Decrements the free semaphore if the shared buffer is not being accessed by another process.',
      'Increments the free semaphore if the shared buffer is not being accessed by another process..',
      'Increments the free semaphore if there is a space available.'
    ],
    correctAnswer: 0,
    explanation: 'The wait(free) operation decrements the free semaphore, which represents available space in the buffer.'
  },
  {
    question: `Round Robin scheduling organises processes __________.

The answer should replace the red underscore.`,
    options: [
      'to run for a specified period of time.',
      'with the shortest execution time to have priority.',
      'to run in batch mode.',
      'which have the shortest run-time the highest priority.',
      'None of the above.'
    ],
    correctAnswer: 0,
    explanation: 'Round Robin scheduling gives each process a fixed time slice (quantum) to execute before switching to the next process.'
  },
  {
    question: `Which of the following file types does UNIX/ Linux recognise?`,
    options: [
      'Regular, directory, char/block and pipe.',
      'Regular, directory, ASCII and pipe.',
      'Regular, binary, char/block and pipe',
      'Text, regular, binary, char/block and directory.'
    ],
    correctAnswer: 0,
    explanation: 'UNIX recognizes regular files, directories, character and block device files, pipes, and symbolic links.'
  },
  {
    question: `The mechanism that signals the CPU to suspend the current process and switch to another is called ______________.

The answer should replace the red underscore.`,
    options: [
      'All of the above',
      'an interrupt',
      'a macro',
      'polling',
      'a semaphore'
    ],
    correctAnswer: 1,
    explanation: 'An interrupt is a signal that causes the CPU to stop its current execution and handle a different task.'
  },
  {
    question: `When a process is blocked, the structure which keeps track of the state of that process (e.g. priority, state of registers, memory, stack etc), is called  _____________.

The answer should replace the red underscore.`,
    options: [
      'a process control block.',
      'an inode.',
      'a memory control block.',
      'user control block.'
    ],
    correctAnswer: 0,
    explanation: 'The Process Control Block (PCB) stores all information needed to manage a process, including its state, registers, and resource usage.'
  },
  {
    question: `What is the main problem associated with a variable partition scheme?`,
    options: [
      'Page frames are too large.',
      'Internal fragmentation.',
      'Deadlock.',
      'External fragmentation.'
    ],
    correctAnswer: 3,
    explanation: 'Variable partition schemes suffer from external fragmentation - unused space between allocated partitions that is too small for new processes.'
  },
  {
    question: `When typing ps –ef the following is displayed.



UID PID PPID C   STIME   TTY      TIME        CMD



0   1   0   0   6:00pm   ??      0:01.03  /init



0   11  1   0   6:00pm   ??      0:00.48  /usr/libexec



0   12  1   0   6:00pm   ??      0:01.05  /usr/sbin/notifyd



32  13  11  0   7:41pm   ttys00   0:00.05  login –pf brian

Which of the following statements is true?`,
    options: [
      '/usr/libexec is the parent of /usr/sbin/notifyd',
      '/login –pf brian is the child of /init',
      'kill -9 11 will terminate /usr/libexec',
      'kill -9 32 will terminate /login –pf brian'
    ],
    correctAnswer: 2,
    explanation: 'Process 11 (/usr/libexec) has PID 11, so kill -9 11 will terminate it. The kill command uses PID, not UID.'
  },
  {
    question: `What is it called when, in a virtual memory system, the processor, spends more time swapping processes in and out, rather than executing processes?`,
    options: [
      'Thrashing.',
      'Swapping.',
      'Switching.',
      'Backing up.'
    ],
    correctAnswer: 0,
    explanation: 'Thrashing occurs when the system spends most of its time moving pages between memory and disk rather than executing useful work.'
  },
  {
    question: `Which of the following ISN'T a requirement of a memory management sytem?`,
    options: [
      'To enable sharing of memory space between processors',
      'To make addressing transparent.',
      'To prevent several processes executing concurrently.',
      'To protect processes from each other.'
    ],
    correctAnswer: 2,
    explanation: 'Memory management should enable concurrent execution of processes, not prevent it. The goal is to allow multiple processes to run safely together.'
  },
  {
    question: `Which of the following is the correct sequence of commands to redirect the output of the ls -l command into the fiile "example" and append it to the end of any current data in that file?`,
    options: [
      'ls -l | example',
      'ls -l >> example',
      'ls -l || example',
      'ls -l > example'
    ],
    correctAnswer: 1,
    explanation: 'The >> operator appends output to a file, while > overwrites the file. | is for piping to another command.'
  },
  {
    question: `With reference to the following program:

Screen Shot 2014-12-18 at 09.44.50.png


Why does the child always run first?`,
    options: [
      'The lseek() command always reads the child first.',
      'The line\n\nwait(0)\n\nputs the parent to sleep until the child has finished.',
      'The parent file pointer fp is a different value from the child file pointer.',
      'The line\n\nif (pid == 0)\n\ncomes first in the program.'
    ],
    correctAnswer: 1,
    explanation: 'The wait(0) system call causes the parent process to wait until the child process completes execution.'
  },
  {
    question: `Which of the following, is the best definition of a critical region?`,
    options: [
      'A section of shared memory which can only be accessed by one process at a time.',
      'A section of shared memory which can only be accessed by a few process at a time.',
      'A piece of code which has a bug, and is therefore likely to crash.',
      'Is a section of code which may become deadlocked.'
    ],
    correctAnswer: 0,
    explanation: 'A critical region (or critical section) is a part of code that accesses shared resources and must be executed by only one process at a time to prevent race conditions.'
  },
  {
    question: `What type of kernel does Linux use?`,
    options: [
      'Mini',
      'Monolithic',
      'Hybrid',
      'Micro'
    ],
    correctAnswer: 1,
    explanation: 'Linux uses a monolithic kernel architecture where all kernel services run in kernel space for performance reasons.'
  },
  {
    question: `The following 'C' program: 

main()
{
  int i;
 
  printf("simpfork: pid = %d\n", getpid());
  i = fork();
  printf("Did a fork.  It returned %d.  getpid = %d.  getppid = %d\n",i, getpid(), getppid());
}


Produces the following output (although the pid and ppid numbers may be different.

> simpfork
simpfork: pid = 914
Did a fork.  It returned 915.  getpid = 914.  getppid = 381
Did a fork.  It returned 0.  getpid = 915.  getppid = 914
>



Why did this program seem to run twice, but with different pid's and ppid's`,
    options: [
      'The operating system has made a mistake.',
      'Fork() clones itself and hence produces two identical processes which are both run.',
      'Fork() clones itself and hence produces two slightly different processes which are both run.',
      'The fork() statement tells the program to loop once.'
    ],
    correctAnswer: 1,
    explanation: 'The fork() system call creates an identical copy of the current process, so both parent and child execute the code after fork().'
  },
  {
    question: `Which of the following statements is correct?`,
    options: [
      'A semaphore is an integer value which can take only positive values which are defined by two operations called wait  and  signal.',
      'A semaphore is an integer value which can take positive and negative values which are defined by two operations called wait  and signal.',
      'A semaphore is an integer value which are defined by two operations called wait  and  signal.\n\nsignal controls entry to critical regions of an active process.',
      'A semaphore is an integer value which are defined by two operations called wait  and signal.\n\nwait is incremented on entry to the critical region of an active process.'
    ],
    correctAnswer: 1,
    explanation: 'Semaphores can have positive, zero, or negative values. Negative values indicate the number of processes waiting for the resource.'
  },
  {
    question: `What is the function of 'second chance algorithm"?`,
    options: [
      'An algorithm for inter-process communication.',
      'An algorithm for cache replacement.',
      'An algorithm for page replacement.',
      'An algorithm to prevent deadlock'
    ],
    correctAnswer: 2,
    explanation: 'The second chance algorithm is a page replacement algorithm that gives pages a second chance before replacing them, using a reference bit.'
  },
  {
    question: `If two processes using Ethernet transmit data at the same time, a clash will occur. Both processes will back-off and the re-transmit after a random delay.

Which of the following is the correct name for this?`,
    options: [
      'Livelock.',
      'Mutual exclusion.',
      'A race condition.',
      'A signal.'
    ],
    correctAnswer: 0,
    explanation: 'Livelock occurs when processes continuously change state in response to other processes but make no progress toward completion.'
  },
  {
    question: `Which directory structure is the most frequently used in modern operating systems, such as UNIX, Linux and Microsoft Windows?`,
    options: [
      'A tree structure.',
      'An MFQ structure.',
      'A single level directory structure.',
      'A two level directory structure.'
    ],
    correctAnswer: 0,
    explanation: 'Modern operating systems use hierarchical tree structures for directory organization, allowing nested subdirectories.'
  },
  {
    question: `An Operating System manages ____________?

The answer should replace the red underscore.`,
    options: [
      'memory',
      'All of the above',
      'disk storage',
      'processes',
      'scheduling'
    ],
    correctAnswer: 1,
    explanation: 'An operating system manages all system resources including memory, disk storage, processes, and scheduling.'
  }
];

// Debug: Verify that the questions are loaded
console.log('NEWQ Quiz Questions loaded successfully! Total questions:', newqQuizQuestions.length);

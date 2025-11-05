section .bss
head resq 1                     ; 64-bit pointer for head

section .text
global _start

_start:
    mov qword [head], 0          ; Set head to null

    mov rdi, 42                  ; Data to insert
    call insert_beginning

    mov rdi, 99                  ; Data to insert
    call insert_end

    call traverse

    mov rax, 60                  ; Syscall number for exit
    xor edi, edi                 ; Exit code 0
    syscall

insert_beginning:
    mov rdi, 16                  ; Request 16 bytes (8 for data, 8 for pointer)
    call allocate_memory
    mov qword [rax], rdi          
    mov qword [rax + 8], [head]   
    mov [head], rax              
    ret

insert_end:
    mov rdi, 16                  
    call allocate_memory
    mov qword [rax], rdi         
    mov qword [rax + 8], 0       

    mov rcx, [head]
    .loop:
        cmp qword [rcx + 8], 0   
        jz .found
        mov rcx, [rcx + 8]       
        jmp .loop
    .found:
    mov qword [rcx + 8], rax     
    ret

traverse:
    mov rcx, [head]              
    .loop:
        cmp rcx, 0               
        je .done
        mov rdi, [rcx]           
        mov rcx, [rcx + 8]       
        jmp .loop
    .done:
    ret

allocate_memory:
    mov rax, 9                   
    xor rdi, rdi                 
    mov rsi, rdi                 
    mov rdx, 0x3                 
    mov r10, 0x22                
    xor r8, r8                   
    xor r9, r9                   
    syscall                      
    ret

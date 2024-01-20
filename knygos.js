let books = [
    {
        pavadinimas: "Smarkuolė Gilė Hopkins",
        puslapiai: 60
    },
    {
        pavadinimas: "Alisa Stebulų šalyje",
        puslapiai: 192
    },
    {
        pavadinimas: "Jurgelis miškauja",
        puslapiai: 112
    },
    {
        pavadinimas: "Paslaptingas drakonas",
        puslapiai: 102
    },
    {
        pavadinimas: "Penktoji šlepetė plius",
        puslapiai: 200
    }
    ];
    
    //Sukurti funkcijas
    
    //printBook(book) - atspausdina vienos knygos duomenis
    
    function printBook(book) {
        console.log("Knygos pavadinimas - " + book.pavadinimas + ", jos pusplaių skaičius "+ book.puslapiai );
    }
    
    // pritAllBooks(arr) - atspausdina visas knygas
    
    books.forEach( (book) => printBook(book));
    
    // getBooksCount(arr) - grąžina perskaitytų knygų skaičių
    
    function getBooksCount(books) {
        return books.length
    }
    
    console.log("Perskaityta knygų - " + getBooksCount(books));
    
    // getTotalNumbersOfPages(arr) - grąžina perskaitytų knygų puslapių skaičių
    
    
    function getTotalNumbersOfPages(arr) {
        return arr.reduce((count, book) => count + book.puslapiai, 0);
        }
        
    console.log("Perskaitytų knygų puslapių skaičius - " + getTotalNumbersOfPages(books));
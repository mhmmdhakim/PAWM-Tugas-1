//toggle class active
const navbar = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

const menu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Kursus.html Page
function showDetails(course) {
  let detailsText = document.getElementById("detailsText");
  if (course === "history") {
    detailsText.innerHTML = `
    <h2>1. Introduction to English Literature:</h2>
    <p>English Literature mencakup semua karya tulis yang dibuat di dunia berbahasa Inggris, mulai dari puisi, prosa, hingga drama. Sejarah sastra Inggris dimulai dari periode Anglo-Saxon hingga saat ini, mencakup berbagai genre dan gaya. Memahami sastra Inggris memungkinkan kita untuk mengeksplorasi perkembangan budaya dan sejarah bangsa Inggris yang tercermin dalam karya-karya literatur yang kaya.</p>
    
    <h2>2. The Anglo-Saxon Period (450-1066):</h2>
    <p>Pada periode ini, sastra didominasi oleh karya epik dan puisi lisan seperti "Beowulf," yang menggambarkan pahlawan, pertempuran, keberanian, dan mitos. Karya-karya sastra di masa ini lebih fokus pada tema kepahlawanan dan perjuangan. Bahasa yang digunakan sangat berbeda dengan bahasa Inggris modern, dan gaya penulisannya kuat dalam unsur-unsur cerita rakyat dan lisan.</p>
    
    <h2>3. The Middle English Period (1066-1500):</h2>
    <p>Setelah invasi Norman, bahasa Inggris mulai dipengaruhi oleh budaya Prancis dan Latin, serta karya-karya seperti "The Canterbury Tales" oleh Geoffrey Chaucer menjadi contoh penting dari sastra zaman ini. Karya-karya ini sering menggunakan simbolisme dan alegori, dengan cerita yang mencerminkan kehidupan sehari-hari serta moralitas masyarakat waktu itu. Sastra mulai berkembang menjadi lebih beragam dan mengakar pada cerita rakyat serta nilai-nilai Kristen.</p>
    
    <h2>4. The Renaissance (1500-1660):</h2>
    <p>Masa ini merupakan kebangkitan budaya dan seni di Inggris, dengan tokoh-tokoh sastra seperti William Shakespeare, Christopher Marlowe, dan John Milton menjadi nama-nama besar. Shakespeare menulis banyak tragedi, komedi, dan soneta yang masih dipelajari dan dipentaskan hingga sekarang, seperti "Hamlet," "Romeo and Juliet," dan "Macbeth." Masa ini juga ditandai oleh eksplorasi tema-tema seperti cinta, kekuasaan, ambisi, dan nasib.</p>
    
    <h2>5. The Restoration and 18th Century (1660-1798):</h2>
    <p>Periode ini menekankan rasionalitas, moralitas, dan satir sosial. Jonathan Swift dan Alexander Pope menjadi penulis yang menggunakan karya sastra untuk mengkritik masyarakat melalui satir. "Gulliver’s Travels" oleh Jonathan Swift dan "The Rape of the Lock" oleh Alexander Pope adalah contoh penting dari karya yang menyindir kebodohan masyarakat dan korupsi politik.</p>
    
    <h2>6. The Romantic Period (1798-1837):</h2>
    <p>Romantisisme lebih menekankan emosi, alam, dan ekspresi individu. Penulis seperti William Wordsworth, Samuel Taylor Coleridge, dan Lord Byron menciptakan karya yang mengangkat keindahan alam dan pengalaman pribadi sebagai inspirasi utama. Karya seperti "Lyrical Ballads" oleh Wordsworth dan Coleridge, serta "Don Juan" oleh Lord Byron menjadi ciri khas masa ini. Romantisisme menjadi gerakan sastra yang berfokus pada perasaan manusia dan kebebasan kreatif.</p>
    
    <h2>7. The Victorian Period (1837-1901):</h2>
    <p>Pada masa ini, sastra sering kali menggambarkan perubahan sosial yang terjadi akibat Revolusi Industri, moralitas, dan kemiskinan. Charles Dickens dengan "Great Expectations" dan Thomas Hardy dengan "Tess of the d'Urbervilles" adalah penulis utama yang karya-karyanya menyuarakan kritik sosial terhadap ketimpangan dan kemunafikan moral di Inggris Victoria. Periode ini juga memperlihatkan pergeseran dari Romantisisme ke Realisme.</p>
    
    <h2>8. The Modern Period (1901-1945):</h2>
    <p>Sastra modern lebih berfokus pada eksperimen gaya penulisan dan narasi. Penulis seperti James Joyce dan Virginia Woolf mempelopori teknik-teknik baru seperti aliran kesadaran (stream of consciousness) yang lebih menyelami pikiran dan perasaan karakter. "Ulysses" oleh Joyce dan "To the Lighthouse" oleh Woolf adalah contoh karya modern yang menggeser fokus sastra ke arah internalisasi dan eksperimen struktural.</p>
    
    <h2>9. The Postmodern Period (1945-present):</h2>
    <p>Sastra postmodern dikenal dengan dekonstruksi, metafiksi, dan penggunaan ironi. Penulis seperti Salman Rushdie dan Margaret Atwood menciptakan karya yang kompleks secara naratif dan tematik, dengan elemen-elemen yang membingungkan batas antara kenyataan dan fiksi. Karya seperti "Midnight’s Children" oleh Salman Rushdie dan "The Handmaid’s Tale" oleh Margaret Atwood menjadi perwakilan penting dari era ini, dengan tema-tema yang menantang struktur tradisional narasi dan masyarakat.</p>
    
    <h2>10. Themes in English Literature:</h2>
    <p>Beberapa tema umum dalam sastra Inggris yang sering diangkat adalah cinta, kematian, kekuasaan, dan hubungan manusia dengan alam. Shakespeare mengangkat tema cinta dalam karya-karyanya, sementara Emily Dickinson banyak menulis tentang kematian dalam puisinya. Sastra Inggris menawarkan beragam tema yang mencerminkan berbagai aspek kehidupan manusia, dari yang paling universal hingga yang sangat personal.</p>
    
    `;
  } else if (course === "grammar") {
    detailsText.innerHTML = `
    <h2>1. Introduction to English Grammar</h2>
       <br>- Pengertian Grammar: Grammar adalah aturan yang mengatur struktur kata, frasa, dan kalimat dalam bahasa. Penting untuk dipahami agar komunikasi dalam bahasa Inggris jelas dan benar.
       <br>- Manfaat Grammar: Membantu menyusun kalimat yang benar dalam berbicara dan menulis. Tanpa grammar yang baik, makna yang ingin disampaikan bisa kabur atau salah.
       <br>- Contoh Latihan: Perbaiki kalimat dengan kesalahan grammar, seperti: "She go to school" menjadi "She goes to school."<br><br>
    
    <h2>2. Parts of Speech</h2>
    <br>- Nouns (Kata Benda): Nama orang, tempat, atau benda. Contoh: dog, city, Sarah.
    <br>- Pronouns (Kata Ganti): Kata yang menggantikan kata benda. Contoh: he, she, it, they.
    <br>- Verbs (Kata Kerja): Tindakan atau keadaan. Contoh: run, be, have.
    <br>- Adjectives (Kata Sifat): Menjelaskan kata benda. Contoh: big, small, red.
    <br>- Adverbs (Kata Keterangan): Menjelaskan kata kerja, kata sifat, atau kata keterangan lainnya. Contoh: quickly, very, well.
    <br>- Prepositions (Kata Depan): Menunjukkan hubungan antara kata benda dengan kata lainnya. Contoh: in, on, at.
    <br>- Conjunctions (Kata Hubung): Menghubungkan kata, frasa, atau kalimat. Contoh: and, but, because.
    <br>- Interjections (Seruan): Ungkapan emosi. Contoh: wow, ouch, hey.
    <br>- Latihan: Identifikasi parts of speech dari kalimat seperti "The quick brown fox jumps over the lazy dog."<br><br>
    
    <h2>3. Tenses</h2>
       <br>- Present Tense:
       <br>- Simple Present: Digunakan untuk menyatakan fakta atau kebiasaan. Contoh: "She works every day."
       <br>- Present Continuous: Untuk tindakan yang sedang berlangsung. Contoh: "She is working now."
       <br>- Present Perfect: Untuk tindakan yang sudah selesai tapi ada hasil di masa kini. Contoh: "She has worked hard."
       <br>- Present Perfect Continuous: Untuk tindakan yang dimulai di masa lalu dan masih berlangsung. Contoh: "She has been working for two hours."
       <br>- Past Tense:
       <br>- Simple Past: Untuk tindakan yang sudah selesai di masa lalu. Contoh: "She worked yesterday."
       <br>- Past Continuous: Untuk tindakan yang sedang berlangsung di masa lalu. Contoh: "She was working at 5 PM."
       <br>- Past Perfect: Untuk tindakan yang terjadi sebelum tindakan lain di masa lalu. Contoh: "She had worked before leaving."
       <br>- Past Perfect Continuous: Untuk tindakan yang sedang berlangsung sebelum tindakan lain di masa lalu. Contoh: "She had been working for two hours before he arrived."
       <br>- Future Tense:
       <br>- Simple Future: Untuk tindakan yang akan terjadi di masa depan. Contoh: "She will work tomorrow."
       <br>- Future Continuous: Untuk tindakan yang akan berlangsung di masa depan. Contoh: "She will be working at 5 PM tomorrow."
       <br>- Future Perfect: Untuk tindakan yang akan selesai sebelum titik waktu tertentu di masa depan. Contoh: "She will have worked by 5 PM tomorrow."
       <br>- Future Perfect Continuous: Untuk tindakan yang sudah berlangsung hingga titik waktu tertentu di masa depan. Contoh: "She will have been working for two hours by 5 PM tomorrow."
       <br>- Latihan: Buatlah kalimat untuk setiap jenis tense.<br><br>
    
    <h2>4. Subject-Verb Agreement</h2>
       <br>- Aturan Dasar: Subjek tunggal mengambil kata kerja tunggal, subjek jamak mengambil kata kerja jamak. Contoh: "The boy runs" vs "The boys run."
       <br>- Subjek Kompleks: Terkadang subjeknya terlihat jamak tetapi sebenarnya tunggal, atau sebaliknya. Contoh: "Each of the boys runs."
       <br>- Latihan: Identifikasi bentuk kata kerja yang benar dalam kalimat seperti "The team (is/are) winning."<br><br>
    
    <h2>5. Active and Passive Voice</h2>
       <br>- Active Voice: Subjek melakukan tindakan. Contoh: "The teacher teaches the lesson."
       <br>- Passive Voice: Subjek menerima tindakan. Contoh: "The lesson is taught by the teacher."
       <br>- Kapan Menggunakan Passive Voice: Biasanya digunakan ketika pelaku tindakan tidak penting atau tidak diketahui. Contoh: "The door was left open."
       <br>- Latihan: Ubah kalimat dari aktif ke pasif, dan sebaliknya.<br><br>
    
       <h2>6. Modals (Auxiliary Verbs)</h2>
       <br>- Pengertian Modals: Kata kerja bantu yang menunjukkan kemampuan, izin, kemungkinan, atau keharusan.
         <br>- Can/Could: Kemampuan atau kemungkinan. Contoh: "I can swim."
         <br>- Will/Would: Kesiapan atau kesediaan. Contoh: "I will help you."
         <br>- Shall/Should: Kewajiban atau saran. Contoh: "You should study."
         <br>- May/Might: Kemungkinan. Contoh: "It may rain tomorrow."
         <br>- Must: Keharusan. Contoh: "You must wear a helmet."
       <br>- Latihan: Buat kalimat menggunakan berbagai modals.<br><br>
    
       <h2>7. Conditional Sentences</h2>
       <br>- Zero Conditional: Untuk fakta umum. Contoh: "If you heat water, it boils."
       <br>- First Conditional: Untuk kemungkinan nyata di masa depan. Contoh: "If it rains, I will stay home."
       <br>- Second Conditional: Untuk situasi hipotetis saat ini atau di masa depan. Contoh: "If I were rich, I would travel the world."
       <br>- Third Conditional: Untuk penyesalan di masa lalu atau hal yang tidak terjadi. Contoh: "If I had studied, I would have passed the exam."
       <br>- Latihan: Tulis kalimat untuk setiap jenis conditional.<br><br>
    
       <h2>8. Direct and Indirect Speech</h2>
       <br>- Direct Speech: Mengutip kata-kata seseorang secara langsung. Contoh: "She said, 'I am happy.'"
       <br>- Indirect Speech: Melaporkan kata-kata seseorang tanpa mengutip secara langsung. Contoh: "She said that she was happy."
       <br>- Perubahan Tenses: Saat mengubah dari direct speech ke indirect speech, tenses biasanya mundur satu langkah. Contoh: "He said, 'I am leaving.' → He said that he was leaving."
       <br>- Latihan: Ubah kalimat dari direct speech menjadi indirect speech.<br><br>
    
       <h2>9. Punctuation Rules</h2>
       <br>- Tanda Titik (.): Mengakhiri kalimat pernyataan.
       <br>- Koma (,): Memisahkan elemen dalam daftar, atau bagian kalimat yang lebih panjang.
       <br>- Tanda Tanya (?): Digunakan pada akhir kalimat pertanyaan.  
       <br>- Tanda Seru (!): Untuk menunjukkan emosi atau penekanan.
       <br>- Tanda Petik (" "): Untuk mengutip kata-kata langsung.
       <br>- Latihan: Tambahkan tanda baca yang tepat dalam kalimat seperti "What are you doing".<br><br>
    
       <h2>10. Common Grammatical Mistakes</h2>
       <br>- Kesalahan Subjek-Kata Kerja: Salah dalam penggunaan kata kerja yang sesuai. Contoh: "The dogs barks" seharusnya "The dogs bark."
       <br>- Penggunaan Kata Ganti yang Salah: Misalnya menggunakan who saat harusnya whom.
       <br>- Salah Tense: Menggunakan tense yang salah untuk konteks waktu. Contoh: "I am go to the store" seharusnya "I am going to the store."
       <br>- Latihan: Identifikasi kesalahan dan perbaiki dalam paragraf yang mengandung kesalahan tata bahasa.<br><br>`;
  }

  //# English Grammar Video Learning Resources

  // ## 1. Introduction to English Grammar
  // - Pengantar Grammar dasar: [English Grammar Course For Beginners: Basic English Grammar](https://www.youtube.com/watch?v=ho0jvw4vkFU)
  // - Pentingnya Grammar: [Why Is Grammar Important?](https://www.youtube.com/watch?v=O9zLbBkA9Sc)
  // - Basic Grammar Rules: [Basic English Grammar: Parts of Speech](https://www.youtube.com/watch?v=SceDmiBEESI)

  // ## 2. Parts of Speech
  // - Overview lengkap: [8 Parts of Speech in English Grammar](https://www.youtube.com/watch?v=CPJmkfUIDXg)
  // - Nouns & Pronouns: [English Grammar: The Parts of Speech](https://www.youtube.com/watch?v=fdCB7iAXpXc)
  // - Verbs & Adjectives: [Verbs and Adjectives Explained](https://www.youtube.com/watch?v=JWIhUqV4zqk)
  // - Adverbs & Prepositions: [Understanding Adverbs and Prepositions](https://www.youtube.com/watch?v=B1YEzNHgOHY)

  // ## 3. Tenses
  // - Present Tenses: [All Present Tense Forms - English Grammar Lesson](https://www.youtube.com/watch?v=L-acMKkwuXE)
  // - Past Tenses: [All Past Tense Forms - English Grammar](https://www.youtube.com/watch?v=PQG_gYFePD4)
  // - Future Tenses: [All Future Tense Forms - English Grammar](https://www.youtube.com/watch?v=pJWGGC4vdZE)
  // - Overview semua Tenses: [Master ALL TENSES in 30 Minutes](https://www.youtube.com/watch?v=hQAVDVBJQwY)

  // ## 4. Subject-Verb Agreement
  // - Basic Rules: [Subject Verb Agreement | English Grammar](https://www.youtube.com/watch?v=IObV8gpXTuE)
  // - Complex Cases: [Difficult Cases of Subject-Verb Agreement](https://www.youtube.com/watch?v=6pGz8zP8GUo)

  // ## 5. Active and Passive Voice
  // - Basic Concept: [Active and Passive Voice in English](https://www.youtube.com/watch?v=T4hB4Jz2qbY)
  // - Usage & Practice: [When to Use Active and Passive Voice](https://www.youtube.com/watch?v=yHDRL6VZqPE)

  // ## 6. Modals (Auxiliary Verbs)
  // - Basic Modal Verbs: [Modal Verbs in English Grammar](https://www.youtube.com/watch?v=LbCnHyqUXxY)
  // - Advanced Usage: [Advanced Modal Verbs - Could, Would, Should, May, Might](https://www.youtube.com/watch?v=UxqR9vkKIl8)

  // ## 7. Conditional Sentences
  // - All Types: [English Conditional Sentences (with examples)](https://www.youtube.com/watch?v=LtaBCElQBrk)
  // - Practice: [Master Conditionals in English](https://www.youtube.com/watch?v=yJ8HmL1MIwg)

  // ## 8. Direct and Indirect Speech
  // - Basic Rules: [Direct and Indirect Speech Rules](https://www.youtube.com/watch?v=LH4Z9wbj9qU)
  // - Practice Examples: [Reported Speech: Practical Examples](https://www.youtube.com/watch?v=m8Y8XULbBl4)

  // ## 9. Punctuation Rules
  // - Basic Punctuation: [English Punctuation Guide](https://www.youtube.com/watch?v=gT2Tg5RryKE)
  // - Advanced Usage: [Advanced Punctuation: Semicolon, Colon, Dash](https://www.youtube.com/watch?v=qL0kybutBgg)

  // ## 10. Common Grammatical Mistakes
  // - Common Errors: [Top 10 Most Common Grammar Mistakes in English](https://www.youtube.com/watch?v=9g6EPWJQu4w)
  // - How to Fix: [How to Avoid Common Grammar Mistakes](https://www.youtube.com/watch?v=rdXQw1Rbq9E)
  else if (course === "vocabulary") {
    detailsText.innerHTML = `
    <h2>1. Introduction to Vocabulary Building:</h2>
    <p>Vocabulary Building adalah proses memperluas kosakata bahasa Inggris untuk membantu meningkatkan kemampuan berbicara, menulis, dan memahami bahasa secara keseluruhan. 
    Dengan memperluas kosakata, pembelajar dapat mengekspresikan ide-ide mereka dengan lebih jelas dan tepat. 
    Kosakata yang baik juga memungkinkan seseorang untuk memahami berbagai konteks dan situasi dalam teks atau percakapan.</p>
    
    <h2>2. Types of Vocabulary:</h2>
    <p>Terdapat dua jenis kosakata utama, yaitu active vocabulary dan passive vocabulary. 
    Active vocabulary adalah kata-kata yang secara rutin digunakan dalam berbicara atau menulis. 
    Sedangkan passive vocabulary adalah kata-kata yang dipahami, tetapi jarang digunakan dalam komunikasi sehari-hari. 
    Keduanya penting untuk dikuasai karena akan meningkatkan pemahaman bahasa baik dalam konteks lisan maupun tertulis.</p>
    
    <h2>3. Strategies for Building Vocabulary:</h2>
    <p>Ada beberapa strategi efektif untuk membangun kosakata. 
    Salah satunya adalah melalui pembacaan aktif, di mana pembaca menandai kata-kata baru dan mempelajarinya. 
    Selain itu, menggunakan kamus secara rutin, baik fisik maupun digital, sangat berguna untuk memahami arti kata-kata baru. 
    Menuliskan kata-kata dalam kalimat dan penggunaan aplikasi latihan kosakata seperti flashcards juga membantu untuk menghafal kata-kata baru dengan lebih cepat.</p>
    
    <h2>4. Synonyms and Antonyms:</h2>
    <p>Mempelajari sinonim (kata dengan arti yang sama atau mirip) dan antonim (kata dengan arti yang berlawanan) adalah cara lain untuk memperluas kosakata. 
    Misalnya, kata "happy" memiliki sinonim seperti joyful dan elated, dan antonim seperti sad atau miserable. 
    Dengan menguasai sinonim dan antonim, pembelajar dapat lebih fleksibel dalam memilih kata yang paling sesuai dengan konteks kalimat.</p>
    
    <h2>5. Prefixes and Suffixes:</h2>
    <p>Memahami prefixes (awalan) dan suffixes (akhiran) membantu memperkirakan arti dari kata-kata yang baru ditemukan. 
    Misalnya, awalan un- pada kata "happy" menjadi "unhappy" yang berarti kebalikan dari bahagia. 
    Akhiran seperti -ness pada kata "kind" menjadi "kindness" yang menunjukkan sifat atau kondisi. 
    Dengan memahami pola ini, pembelajar dapat menguraikan banyak kata baru dengan lebih mudah.</p>
    
    <h2>6. Collocations:</h2>
    <p>Collocations adalah pasangan kata yang sering digunakan bersama dalam bahasa Inggris. 
    Misalnya, "make a decision" atau "take a shower". 
    Mempelajari kolokasi membantu pembelajar menggunakan kata-kata dalam kombinasi yang benar sesuai dengan kebiasaan bahasa Inggris alami. 
    Dengan menguasai kolokasi, penggunaan bahasa menjadi lebih lancar dan alami.</p>
    
    <h2>7. Word Families:</h2>
    <p>Mempelajari word families membantu pembelajar mengenal kata-kata yang berasal dari akar yang sama. 
    Misalnya, kata "act" memiliki keluarga kata seperti actor, action, active, dan activity. 
    Dengan mengenal keluarga kata, pembelajar dapat memahami berbagai bentuk kata yang berhubungan, sehingga memperluas kosakata secara lebih mendalam.</p>
    
    <h2>8. Idiomatic Expressions:</h2>
    <p>Idiomatic expressions atau idiom adalah ungkapan yang memiliki makna kiasan, bukan makna harfiah dari kata-katanya. 
    Misalnya, "it’s raining cats and dogs" berarti hujan lebat, bukan hujan binatang. 
    Memahami idiom sangat penting untuk memahami bahasa Inggris sehari-hari, terutama dalam konteks percakapan atau media populer.</p>
    
    <h2>9. Phrasal Verbs:</h2>
    <p>Phrasal verbs adalah kombinasi dari kata kerja dengan preposisi atau adverb yang mengubah makna aslinya. 
    Misalnya, "give up" berarti menyerah, yang berbeda dari makna kata dasar "give". 
    Mempelajari phrasal verbs sangat penting karena sering digunakan dalam percakapan sehari-hari dalam bahasa Inggris.</p>
    
    <h2>10. Common Vocabulary Mistakes:</h2>
    <p>Beberapa kesalahan umum dalam kosakata terjadi ketika pembelajar salah memahami atau menggunakan kata. 
    Contohnya, kebingungan antara kata affect dan effect, atau advice dan advise. 
    Penting untuk memperhatikan konteks dan arti kata dengan hati-hati untuk menghindari kesalahan semacam ini dalam komunikasi tertulis maupun lisan.</p>
    
    `;
  } else {
    detailsText.innerHTML = "Click on a course to see the details.";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// Contact Form Validation
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector(
    'textarea[placeholder="Your Message"]'
  ).value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address");
  } else {
    alert("Message sent successfully!");
    contactForm.reset();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

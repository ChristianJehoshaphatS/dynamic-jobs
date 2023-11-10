# P2-Challenge-2 (Client Side)

- Tema Aplikasi: ...

Struktur Folder:

- server (PORT: 3000)
- client-public
- client-cms

## **W2D1**

Target:

### **Web Layouting**

Buatlah web layouting menggunakan HTML dan CSS (boleh menggunakan CSS framework) untuk aplikasi client kamu meliputi halaman:

- [V] **Public site**

  - [V] Halaman Home/Landing Page
    - Halaman yang berfungsi untuk menampilkan data Entitas Utama berbentuk Card, tambahkan input search/filter dan pagination pada halaman ini, buatlah halaman ini dengan layout yang rapi dan semenarik mungkin.
  - [V] Halaman Detail
    - Buatlah Halaman yang berisi detail dari Entitas Utama.

- [ ] **CMS site**
  - [V] Halaman Login
    Pada halaman ini buatlah sebuah form untuk menampung input email dan password user yang digunakan untuk masuk ke CMS
  - [V] Halaman list entitas utama . Tampilkan data entity dalam bentuk Tabel .
  - [V] Navbar / Sidebar yang berfungsi sebagai navigasi halaman.
  - [V] Halaman create entitas utama
    - Buatlah form yang berfungsi sebagai penampung input data entitas utama yang akan dibuat, sesuaikanlah input dengan dengan tipe yang sesuai. Untuk imgUrl buatlah input bertipe text saja.
  - [V] Halaman edit entitas utama
    - Buatlah form yang sama persis seperti pada halaman create dengan Judul halaman/form yang berbeda.
  - [V] Halaman upload image entitas utama
    - Buatlah sebuah halaman yang menampilkan nama/title entitas utama + gambar (yang akan diubah), beserta sebuah input berupa select File untuk property imgUrl.
  - [V] Halaman list untuk entitas kedua. Tampilkan data entity dalam bentuk Tabel .
  - [V] Halaman register staff
    - Pada halaman ini buatlah sebuah form untuk menampung input semua data user yang akan didaftarkan oleh admin.

## **W2D2**

Target:

### **Client Server Communication**

Mencoba client server communication menggunakan HTTP Client seperti axios.

- [V] Public site: Halaman Home
  Lakukan GET data entitas utama (include: pagination, filter dan sort) pada halaman ini, tampilkan data sesuai dengan database server kalian.
- [V] CMS site: Halaman Login
  Lakukan POST pada pada halaman ini, Jika proses login berhasil, simpan token di localStorage
- [V] CMS site: Halaman Create
  Lakukan POST pada halaman create entitas utama, coba kalian buat data baru dan pastikan bahwa hanya User yang Valid yang bisa membuat data baru
- [V] Halaman lainnya
  Lengkapi semua proses komunikasi Client Server pada aplikasi kalian

## **W2D3**

Target:

### **Generate React Project dengan build tools**

Convert layout atau slicing template yang sudah dibuat ke dalam React.js :

- [V] Coba buat React pada project hasil generate Vite
- [V] Public site

  - [V] Halaman Home/Landing Page
  - [V] Halaman Detail (Public)

- [V] CMS site
  - [V] Halaman Login
  - [V] Halaman list entitas utama
  - [V] Halaman create entitas utama
  - [V] Halaman edit entitas utama
  - [V] Halaman upload image entitas utama
  - [V] Halaman list untuk entitas kedua
  - [V] Halaman register staff

## **W2D4**

Target:

### React Lifecycle

Integrasikan Halaman Web dengan server yang sudah kalian buat pada Challenge/Project 1. Jangan lupa untuk tampilkan pesan error dari server jika terjadi error di halaman web kalian. Untuk menampilkan pesan error / success bisa menggunakan package seperti SweetAlert dll.

Pastikan setiap pergantian tampilan terjadi secara reaktif dengan tidak me-refresh web browser mu. Pasca login berhasil, user akan dinavigasikan ke tampilan home/list.

- [V] Public site

  - [V] GET data entitas utama pada halaman Home/Landing Page (include: pagination, filter dan sort)
  - [V] GET data detail entitas utama pada halaman Detail

- [V] CMS site
  - [V] POST pada halaman Login
  - [V] GET data entitas utama pada halaman list entitas utama (include: pagination, filter dan sort)
  - [V] POST pada halaman create entitas utama
  - [V] PUT pada halaman edit entitas utama
  - [V] DELETE untuk menghapus entitas utama
  - [V] PATCH untuk mengupload image / mengupdate imgUrl entitas utama
  - [V] GET data entitas kedua pada Halaman list entitas kedua
  - [V] POST pada Halaman register staff

### React Router

Silahkan Implementasikan routing pada aplikasi client kalian.

- [V] Public site
  - [V] Halaman Home/Landing Page
  - [V] Halaman Detail
- [V] CMS site
  - [V] Halaman Login
  - [V] Halaman list entitas utama
  - [V] Halaman create entitas utama (boleh menggunakan modal)
  - [V] Halaman edit entitas utama (boleh menggunakan modal)
  - [V] Halaman upload image untuk entitas utama (boleh menggunakan modal)
  - [V] Halaman list untuk entitas kedua
  - [V] Halaman register staff

## **W2D5**

Target:

Coba lakukan deployment untuk client (bisa coba deploy hal sederhana terlebih dahulu seperti halaman yang menampilkan ‘hello world’) menggunakan Firebase/Vercel.

- [V] Deploy client

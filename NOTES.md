# Catatan Week 2

> Tuliskan apapun yang kalian pelajari pada phase 2 week-2 di file ini.
>
> "Pemahaman yang baik berasal dari keinginan untuk terus belajar, dan catatan adalah langkah pertama menuju pengetahuan yang dalam."

framework itu kerangka kerja, penuh dengan feature dan opini/cara pakai dari pembuatnya

library nggak full feature, lebih spesifik terhadap sesuatu, pengerjaannya lebih ribet tapi lebih bebas dari framework
dom vs react
imperatif vs deklaratif

JSX adalah file react, isinya component atau element react

deskripsikan element dalam sebuah function
return element yang mau jadi tampilan (Render Component)

jsx expression harus dibungkus 1 element, jadi return itu hanya 1 element

1 element ini kita pakai fragment
fragment ini nggak akan muncul di render kita,

pengkondisian dalam react
suatu data yang dapat berubah disebut state
import {useState} from 'react'
declarenya diatas return

react menyediakan suatu fungsi untuk state yaitu useState
useState hanya bisa di declare didalam functional Component

const [] = useState(false); by default false
index 0 isinya nama dari statenya|nama variable state
index 1 function yang digunakan untuk mengganti/mutate statenya

[namaVar, setVar]

cara use sebuah value dari state
{namaVar}

cara set sebuah value state

harus declare suatu fungsi yang digunakan untuk mengganti suatu value dari statenya

declarenya harus sebelum return

function event handler

const anFN = () => {
setVar(namaVar+10) > mau perubahan apa?
}

onclick html digantidengan onCLick={anFN} < disini functionnya jangan di invoke, karena nanti akan di invoke saat klik nya terjadi

tampilan secara kondisi | conditional rendering

bungkus elementnya dengan curly bracket
langsung pake statenya && (element rendernya)

tujuannya memanfaatkan compare AND

input berubah, state berubah juga

onChange > declare function di event handlers
di input element

sebuah event ada parameternya
event.target.value

looping element pakai map
return (element)

tambah attribute key, harus unik, key={todo.id}
value2 bawahnya sesuaikan dinamis dengan datanya
pake curly brackets

tambahan form yang banyak input
setiap input dan select/radio akan ada onchangenya

buat state baru berisi object
isi objectnya adalah masing2 value dari input ini, jangan lupa tambah suatu value yang jadi key saat looping element

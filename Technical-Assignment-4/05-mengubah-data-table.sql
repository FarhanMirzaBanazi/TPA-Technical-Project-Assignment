use mystore;

-- merubah nama jhon son menjadi Farhan Junior menggunakan id_pelanggan
update pelanggan set nama_pelanggan = "Farhan Junior"
where id_pelanggan = 4;

select * from pelanggan;
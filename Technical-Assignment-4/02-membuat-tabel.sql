use mystore;

create table pelanggan (
id_pelanggan integer primary key not null auto_increment,
nama_pelanggan varchar(50),
umur int,
alamat varchar(50));

create table transaksi (
no_transaksi integer primary key not null auto_increment,
id_pelangganFK integer references pelanggan(id_pelanggan) on delete cascade on update cascade,
jenis_transaksi varchar(20),
tanggal varchar(30),
jumlah integer);

create table produk (
id_produk integer primary key not null auto_increment,
no_transaksiFK integer references transaksi(no_transaksi) on delete cascade on update cascade,
id_kategoriFK integer references kategori(id_kategori) on delete cascade on update cascade,
nama_produk varchar(255),
harga_produk float,
keterangan_produk varchar(50),
stok_produk varchar(20)
);

create table pelanggan_has_produk (
id_pelangganFK integer references pelanggan(id_pelanggan)
on delete cascade on update cascade,
id_produkFK integer references produk(id_produk)
on delete cascade on update cascade,
primary key(id_pelangganFK, id_produkFK)
);

create table kategori(
id_kategori integer primary key not null auto_increment,
jenis_kategori varchar(60),
keterangan_stok varchar(25)
);

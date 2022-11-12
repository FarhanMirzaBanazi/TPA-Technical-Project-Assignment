insert into pelanggan(id_pelanggan, nama_pelanggan, umur, alamat) values
(1, "Dony Tata", 24, "Surabaya"),
(2, "Didi Sukma", 19, "Sriwijaya"),
(3, "Hansa Normand", 27, "Serang"),
(4, "Jhon Son", 35, "Bali"),
(5, "Aji Sinegar", 22, "Salatiga"),
(6, "Perdana Dino", 21, "pati"),
(7, "Fajar Kurniawan", 25, "Karanganyar"),
(8, "Ikhsan Nurokhim", 24, "Lombok"),
(9, "Ediana Dion", 21, "Wonogiri"),
(10, "Tristan Nur Cahya", 19, "Semarang");


insert into transaksi(no_transaksi, id_pelangganFK, jenis_transaksi, tanggal, jumlah) values
(1, 4, "Payment", "2022-11-01", 500000),
(2, 3, "Payment", "2022-11-01", 250000),
(3, 4, "Payment", "2022-11-01", 1500000),
(4, 1, "Payment", "2022-11-02", 2500000),
(5, 2, "Payment", "2022-11-05", 700000),
(6, 5, "Payment", "2022-11-05", 150000),
(7, 4, "Payment", "2022-11-06", 400000),
(8, 10, "Payment", "2022-11-07", 255000),
(9, 9, "Payment", "2022-11-07", 1000000),
(10, 8, "Payment", "2022-11-08", 2500000),
(11, 6, "Payment", "2022-11-08", 200000),
(12, 7, "Payment", "2022-11-09", 900000),
(13, 7, "Payment", "2022-11-09", 450500);


insert into produk(id_produk, no_transaksiFK, id_kategoriFK, nama_produk, harga_produk, keterangan_produk, stok_produk) values
(1, 10, 1, "Monitor LED AOC", 2300000, "Baru", "Ada"),
(2, 1, 2, "Logitech G304 LightSpeed", 500000, "Baru", "Ada"),
(3, 3, 3, "Keychron K3", 1300000, "Baru", "Ada"),
(4, 2, 4, "Lenovo TH10", 199000, "Baru", "Ada"),
(5, 8, 5, "KZ EDX", 99000, "Baru", "Ada"),
(6, 11, 6, "Cooling Pad Relix Gaming", 195000, "Baru", "Ada"),
(7, 4, 7, "RAM GEFORCE", 1700000, "Baru", "Ada"),
(8, 12, 8, "Samsung SSD", 900000, "Baru", "Ada"),
(9, 5, 9, "Seagate", 115000, "Baru", "Ada"),
(10, 9, 10, "VGA Vurion R7", 900000, "Baru", "Ada");


insert into pelanggan_has_produk (id_pelangganFK, id_produkFK) values
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);


insert into kategori(id_kategori, jenis_kategori, keterangan_stok) values
(1, "Monitor", "Ada"),
(2, "Mouse", "Ada"),
(3, "Keyboard", "Ada"),
(4, "Headphone", "Ada"),
(5, "Earphone", "Ada"),
(6, "Cooling Pad", "Ada"),
(7, "Ram", "Ada"),
(8, "SSD", "Ada"),
(9, "HDD", "Ada"),
(10, "VGA", "Ada");

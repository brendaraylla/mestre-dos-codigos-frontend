var data = [
  {
    "title": "Populares na Netflix",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db"
    ]
  },
  {
    "title": "Continuar assistindo",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db"
    ]
  },
  {
    "title": "Em alta",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db"
    ]
  },
  {
    "title": "Assistir novamente",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db"
    ]
  },
  {
    "title": "ORIGINAIS NETFLIX",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/CFXrEYtXxhcqF3ItF4DehdUbQjk/AAAABZ7uYTEFxCq6DDGEIq2LrNJ_JJUVISrW5rY945da1mDOKLFvmrc3lqoZQLhucO98txF001LIUhY_SKZ8hezRvR6jl9Zbjro_RCzH9dkCXYwMMSfCThAo0ZMqcaYbkO2MBGX2jGUVEZYIBMVJImPy5HiOH24f-tnBHQZpCGRoOsblvCb9S8EBQjlgTV4nODoN_r_KBJyI.webp?r=0a9"
    ]
  },
  {
    "title": "Favoritos da crítica",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db"
    ]
  },
  {
    "title": "Sugestões",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABT0nulH6iDJ35Q0hASMkOIqnI7J3nfY24j_zQLWvStml2O-AHOZfvdSxweETIySsbqYMBaFa7ktDU9ko6mZK-zgkgQQ.webp?r=077",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXlOFaiQWAt81bj5AotIGG1tD-N6sx0jaYlKLce8t3iTI_GW6Cl5iRNa2KRKHQ3vYzyWTbC4YfjHmgmroQA-BbenDlw.webp?r=1f8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db"
    ]
  }
];

window.onload = function() {
  const container = document.querySelector('.main__container');

  data.forEach((obj, index) => {
    if (index === 3) {
      const contentSecond = document.createElement("div");
      contentSecond.classList.add("main__content-second");
      contentSecond.style = "background: url(https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdSSO8K-GxfF6nFpPPKUU-3YjTa98xvOXALIPH7xFR9zHJ21pebR_51wEWgg1Y_7qHD0iKY9RZ95jVe6VCIsUjcGEAyM.webp?r=fa9) no-repeat; background-size: cover; background-color: rgb(20, 20, 20); background-blend-mode: overlay; width: 100%;"
      container.appendChild(contentSecond);

      const textImage = document.createElement("div");
      textImage.classList.add("main__text-image", "right");
      contentSecond.appendChild(textImage);

      const imgSerieContent = document.createElement("div");
      imgSerieContent.classList.add("main__left-content");
      contentSecond.appendChild(imgSerieContent);

      const img = document.createElement("img");
      img.classList.add("main__left-image");
      img.src = "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/NYskjzLJzCNUfv50Bf8eKZdz4nA/AAAABYIij5q9E_yqRmANXobTVSlIGCd0pk6FbaMmBJqIMJwvl8d2zOjEwwyoqFTQuEDsztkuwVQ8BTg2FQrV7aduGCjfv_2L.webp?r=966";
      imgSerieContent.appendChild(img);

      const imgTitle = document.createElement("img");
      imgTitle.classList.add("main__focus-image");
      imgTitle.src = "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABedHnwC74U_Pc6eguekvqyGlDs1BjVl_2QOGAdJZRNWGPM8xnJ28gBI5uVO3ATzzyi1rorHR5GmwT2DG_YFkgU-422_bvZ5nU13-RbPT_2Vo94zKzRWlsW7QNfKGQhcWCR0JiHl26-QmNdkCpBCRXR74uPU_NzeOu_enaTdvKcnsmw.webp?r=618";
      textImage.appendChild(imgTitle);

      const title = document.createElement("h3");
      title.innerHTML = "Assista à temporada 1 agora";
      title.classList.add("main__focus-title");
      textImage.appendChild(title);

      const parag = document.createElement("p");
      parag.innerHTML = "Os apresentadores se divertem. Os designers dão o melhor de si. Quem será escolhido para transformar o futuro da moda?";
      parag.classList.add("main__focus-text");
      textImage.appendChild(parag);

      const actions = document.createElement("div");
      actions.classList.add("main__actions");
      textImage.appendChild(actions);
      
      const btnWatch = document.createElement("button");
      const btnInfo = document.createElement("button");
      btnWatch.classList.add("main__action-btn");
      btnInfo.classList.add("main__action-btn");
      btnWatch.innerHTML = "Assistir";
      btnInfo.innerHTML = "Mais informações";
      actions.appendChild(btnWatch);
      actions.appendChild(btnInfo);
    }

    const title = document.createElement("h2");
    title.innerHTML = obj.title;
    container.appendChild(title);
  
    const sectionContent = document.createElement("div");
    sectionContent.classList.add("section__content");
    container.appendChild(sectionContent);
  
    const buttonLeft = document.createElement("button");
    buttonLeft.classList.add("btn", "main__icon-left", index);
    buttonLeft.addEventListener("click", () => goToLeft(index)); 
    sectionContent.appendChild(buttonLeft);
    const iconLeft = document.createElement("img");
    iconLeft.src = "./img/icons/icon-arrow-left.svg";
    buttonLeft.appendChild(iconLeft);
    
    const buttonRight = document.createElement("button");
    buttonRight.classList.add("btn", "main__icon-right", index);
    buttonRight.addEventListener("click", () => goToRight(index)); 
    sectionContent.appendChild(buttonRight);
    const iconRight = document.createElement("img");
    iconRight.src = "./img/icons/icon-arrow-right.svg";
    buttonRight.appendChild(iconRight);
    
    const sectionImage = document.createElement("section");
    sectionImage.classList.add('section-image', `section-image-${index}`);
    sectionContent.appendChild(sectionImage);
    
    const ul = document.createElement("ul");
    ul.classList.add("main__image-list");
    sectionImage.appendChild(ul);
    
    obj.images.forEach((image) => {
      const li = document.createElement("li");
      li.classList.add("main__item-img");
      ul.appendChild(li);
      
      const img = document.createElement("img");
      img.classList.add("main__image", "list-item-image");
      li.appendChild(img);
      img.src = image;

      if (obj.title === 'ORIGINAIS NETFLIX') {
        li.classList.add('small-scale')
      }
    });
  });
};
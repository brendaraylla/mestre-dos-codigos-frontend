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
    });
  });
};
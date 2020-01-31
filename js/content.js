var data = [
  {
    "title": "Populares na Netflix",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTluQ4BV2_laws-uFCTj8h8CdYuOFkf14E7InNae7khB-ARlW5nY82Fi743pch7b-MmXFHkjXhiVcHUvy4I1hum6aKDFmDOl_Twx6-oiar5it6SEiGCjJ2wsvSS2.jpg?r=6be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVXrQbNheqKEBeLUcQatDcMx7TcSczhs92aMYP8SVHPKi7VOyLFgip9w2iGOMOMh-Y9j5oBMol1ZDd2PIIQ8Bn0qROKR6-p2Z0BP_a0ymsr7mDbS7uiVGO_lyLe5Qw8UMgkLKOeABmF11dm9w5o3VSPs1x_QTA.jpg?r=2ee",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQFcSnTMuyBcbV5PNwf8BPlqZh1T3VnHvgHGiM5KW13ui1-b_WibKOSIY3ZSj6XNOjRs2YsEmesqwb03_IVQthRSQIYaGLf7jLCvLQ6XcbQfnkQ0CBUI_imPqg2lVDuHHhD6PiKbv0K8hXKJQZZMmuKXyL7jlw.jpg?r=762",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcnQsbBQu61afmkyp8ft_3M9PdZyWir6xsH6fMDR8T4utftwR47FaloCa0jodNhK_QHjn9F5XW85UmZYW2_IsGe4nHlr6hOxTKokENeK4BFjE7h2QLOIh4gRunDm.jpg?r=933",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXVpUlxWh2mVzSwSCSwYmAW-wkKmm9MuQH9mUxXIU0AbHJ_DmF-Hu5Ck8FiR28tpqmttNKqH_nhjz021u8kt4tiu4aBxnSdrnHjOjYZsZvh8T_CLM66YAkXvmdSy.jpg?r=8b8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa-M70U4H5OXNtG9CR27VqYd-1TfpKgQM4FkSIylThfnQX6to-nPBfYj0wUE6K73T4VNYffwVx90Y3Z-mpPRObR85qEJuzNV8ApwLmCTHc-ubefzfCQ4M3q_ORUM.jpg?r=8fb",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdoILx8NQ8uAvqLGihKufqOREbDvMex0AQff0U_moB4iT4QXyjNJJShePypB1eQ8fe_rYdfgv0DcWtBIAlkz79F3Hw7LcQGU_t8QLiMEsFpDuxsZvOXSkoX0qw4o.jpg?r=54d",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcc22L0m5hv230w0zrZwOS1_T6Yqf71X17W6DxoSe9Oz1ZHxNDBym9neal8ElWM-hA-FrHNYitIdek7MCWg1oFXKQlaX3wvFIyBk4SvJiWIBkM9vOfj5VFu0dNhjFiPEb0Pqfe8E2cQ1CiKkkgiNU0FUDlIuOQ.jpg?r=ec4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRF-yGoofBkfcoESpR7D2DJDfjKtdBXXJwzp6Zz8sX5Ef_TnZg0wgWpYOIsaYEOfbreikbwfKITOxTgBuzc_E4PgZHynORoYKKdmxGyXCYDsUj8JQRyTfcGX5gf5.jpg?r=752",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABex-j0nxvsg98YAm1bOmFORO1q8EadmI5NZMKAMXvKKj8MNY7dhDgquLH4UMEAsPjxJDy3HzFxv_o44hvC8JiMjD2eislER-A_mnSFcF9YTVHWaYjGtcSo19JGa0.jpg?r=ed4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABY-M-WJkYPcvM89yxSYm7GLKMk5mMGTVi1IqRY49EBaiKmVo8_ojowMR3Ng9KD0mnqOegKNh64NjEcIertKVHETl_S7K6GZ_lD7OJd91KcEuZiEHYF50oYB8IMEr.jpg?r=88c",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfHK0uP1i7GZWFrlUBUxo_px1k8LXfpQBpARhRNGDBQr5c4H1q5s0mv_5SwVW2VR-cofg8Tuhz9MpFkDgHzg-IcTRxx3oCZN6JXvk2yYWYaM7I5gfQi3pQErrWTF.jpg?r=e6b",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSOuF-4t-QPtyPtxZxWEggYXfQQ5wArEGjqZxGMwXsWvh9jxcCj55vB3-UjkddTml7a3-JDfDSBLA2UAZ0DDBJx3TfKjKH0Ev0E2kzQ3GkXVkNqSjovl2ggmF6co.jpg?r=d3e",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG5wo4aymYTAV5_96Z3IEf5YrsNYYJoiFpFgv9mevtO2QHY6-BLqB1lipEwQghuaLKAOuuCmeD2a3LDcJ3LxEV2C72aZ5A1AXxeMpFySDnIcxW1kAR2cKLtKxS9.jpg?r=6ed",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABW2AANoAfVEv3efHXKaOhtH2SdY37AcaUaQagEVDcakH3MTNvgAWSi_gc1NUfiAgnPLMJ3cBJBQS2sEXETHWGuuj_kvn7L9q-U3vSdM-USH3aPVYox_cgOA75hLA.jpg?r=a73"
    ]
  },
  {
    "title": "Continuar assistindo",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdoILx8NQ8uAvqLGihKufqOREbDvMex0AQff0U_moB4iT4QXyjNJJShePypB1eQ8fe_rYdfgv0DcWtBIAlkz79F3Hw7LcQGU_t8QLiMEsFpDuxsZvOXSkoX0qw4o.jpg?r=54d",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABW2AANoAfVEv3efHXKaOhtH2SdY37AcaUaQagEVDcakH3MTNvgAWSi_gc1NUfiAgnPLMJ3cBJBQS2sEXETHWGuuj_kvn7L9q-U3vSdM-USH3aPVYox_cgOA75hLA.jpg?r=a73",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTluQ4BV2_laws-uFCTj8h8CdYuOFkf14E7InNae7khB-ARlW5nY82Fi743pch7b-MmXFHkjXhiVcHUvy4I1hum6aKDFmDOl_Twx6-oiar5it6SEiGCjJ2wsvSS2.jpg?r=6be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcnQsbBQu61afmkyp8ft_3M9PdZyWir6xsH6fMDR8T4utftwR47FaloCa0jodNhK_QHjn9F5XW85UmZYW2_IsGe4nHlr6hOxTKokENeK4BFjE7h2QLOIh4gRunDm.jpg?r=933",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXVpUlxWh2mVzSwSCSwYmAW-wkKmm9MuQH9mUxXIU0AbHJ_DmF-Hu5Ck8FiR28tpqmttNKqH_nhjz021u8kt4tiu4aBxnSdrnHjOjYZsZvh8T_CLM66YAkXvmdSy.jpg?r=8b8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVXrQbNheqKEBeLUcQatDcMx7TcSczhs92aMYP8SVHPKi7VOyLFgip9w2iGOMOMh-Y9j5oBMol1ZDd2PIIQ8Bn0qROKR6-p2Z0BP_a0ymsr7mDbS7uiVGO_lyLe5Qw8UMgkLKOeABmF11dm9w5o3VSPs1x_QTA.jpg?r=2ee",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQFcSnTMuyBcbV5PNwf8BPlqZh1T3VnHvgHGiM5KW13ui1-b_WibKOSIY3ZSj6XNOjRs2YsEmesqwb03_IVQthRSQIYaGLf7jLCvLQ6XcbQfnkQ0CBUI_imPqg2lVDuHHhD6PiKbv0K8hXKJQZZMmuKXyL7jlw.jpg?r=762",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABex-j0nxvsg98YAm1bOmFORO1q8EadmI5NZMKAMXvKKj8MNY7dhDgquLH4UMEAsPjxJDy3HzFxv_o44hvC8JiMjD2eislER-A_mnSFcF9YTVHWaYjGtcSo19JGa0.jpg?r=ed4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcc22L0m5hv230w0zrZwOS1_T6Yqf71X17W6DxoSe9Oz1ZHxNDBym9neal8ElWM-hA-FrHNYitIdek7MCWg1oFXKQlaX3wvFIyBk4SvJiWIBkM9vOfj5VFu0dNhjFiPEb0Pqfe8E2cQ1CiKkkgiNU0FUDlIuOQ.jpg?r=ec4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABY-M-WJkYPcvM89yxSYm7GLKMk5mMGTVi1IqRY49EBaiKmVo8_ojowMR3Ng9KD0mnqOegKNh64NjEcIertKVHETl_S7K6GZ_lD7OJd91KcEuZiEHYF50oYB8IMEr.jpg?r=88c",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRF-yGoofBkfcoESpR7D2DJDfjKtdBXXJwzp6Zz8sX5Ef_TnZg0wgWpYOIsaYEOfbreikbwfKITOxTgBuzc_E4PgZHynORoYKKdmxGyXCYDsUj8JQRyTfcGX5gf5.jpg?r=752",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa-M70U4H5OXNtG9CR27VqYd-1TfpKgQM4FkSIylThfnQX6to-nPBfYj0wUE6K73T4VNYffwVx90Y3Z-mpPRObR85qEJuzNV8ApwLmCTHc-ubefzfCQ4M3q_ORUM.jpg?r=8fb",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfHK0uP1i7GZWFrlUBUxo_px1k8LXfpQBpARhRNGDBQr5c4H1q5s0mv_5SwVW2VR-cofg8Tuhz9MpFkDgHzg-IcTRxx3oCZN6JXvk2yYWYaM7I5gfQi3pQErrWTF.jpg?r=e6b",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSOuF-4t-QPtyPtxZxWEggYXfQQ5wArEGjqZxGMwXsWvh9jxcCj55vB3-UjkddTml7a3-JDfDSBLA2UAZ0DDBJx3TfKjKH0Ev0E2kzQ3GkXVkNqSjovl2ggmF6co.jpg?r=d3e",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG5wo4aymYTAV5_96Z3IEf5YrsNYYJoiFpFgv9mevtO2QHY6-BLqB1lipEwQghuaLKAOuuCmeD2a3LDcJ3LxEV2C72aZ5A1AXxeMpFySDnIcxW1kAR2cKLtKxS9.jpg?r=6ed",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74"
    ]
  },
  {
    "title": "Em alta",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfHK0uP1i7GZWFrlUBUxo_px1k8LXfpQBpARhRNGDBQr5c4H1q5s0mv_5SwVW2VR-cofg8Tuhz9MpFkDgHzg-IcTRxx3oCZN6JXvk2yYWYaM7I5gfQi3pQErrWTF.jpg?r=e6b",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABW2AANoAfVEv3efHXKaOhtH2SdY37AcaUaQagEVDcakH3MTNvgAWSi_gc1NUfiAgnPLMJ3cBJBQS2sEXETHWGuuj_kvn7L9q-U3vSdM-USH3aPVYox_cgOA75hLA.jpg?r=a73",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQFcSnTMuyBcbV5PNwf8BPlqZh1T3VnHvgHGiM5KW13ui1-b_WibKOSIY3ZSj6XNOjRs2YsEmesqwb03_IVQthRSQIYaGLf7jLCvLQ6XcbQfnkQ0CBUI_imPqg2lVDuHHhD6PiKbv0K8hXKJQZZMmuKXyL7jlw.jpg?r=762",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcnQsbBQu61afmkyp8ft_3M9PdZyWir6xsH6fMDR8T4utftwR47FaloCa0jodNhK_QHjn9F5XW85UmZYW2_IsGe4nHlr6hOxTKokENeK4BFjE7h2QLOIh4gRunDm.jpg?r=933",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVXrQbNheqKEBeLUcQatDcMx7TcSczhs92aMYP8SVHPKi7VOyLFgip9w2iGOMOMh-Y9j5oBMol1ZDd2PIIQ8Bn0qROKR6-p2Z0BP_a0ymsr7mDbS7uiVGO_lyLe5Qw8UMgkLKOeABmF11dm9w5o3VSPs1x_QTA.jpg?r=2ee",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTluQ4BV2_laws-uFCTj8h8CdYuOFkf14E7InNae7khB-ARlW5nY82Fi743pch7b-MmXFHkjXhiVcHUvy4I1hum6aKDFmDOl_Twx6-oiar5it6SEiGCjJ2wsvSS2.jpg?r=6be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdoILx8NQ8uAvqLGihKufqOREbDvMex0AQff0U_moB4iT4QXyjNJJShePypB1eQ8fe_rYdfgv0DcWtBIAlkz79F3Hw7LcQGU_t8QLiMEsFpDuxsZvOXSkoX0qw4o.jpg?r=54d",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXVpUlxWh2mVzSwSCSwYmAW-wkKmm9MuQH9mUxXIU0AbHJ_DmF-Hu5Ck8FiR28tpqmttNKqH_nhjz021u8kt4tiu4aBxnSdrnHjOjYZsZvh8T_CLM66YAkXvmdSy.jpg?r=8b8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRF-yGoofBkfcoESpR7D2DJDfjKtdBXXJwzp6Zz8sX5Ef_TnZg0wgWpYOIsaYEOfbreikbwfKITOxTgBuzc_E4PgZHynORoYKKdmxGyXCYDsUj8JQRyTfcGX5gf5.jpg?r=752",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABex-j0nxvsg98YAm1bOmFORO1q8EadmI5NZMKAMXvKKj8MNY7dhDgquLH4UMEAsPjxJDy3HzFxv_o44hvC8JiMjD2eislER-A_mnSFcF9YTVHWaYjGtcSo19JGa0.jpg?r=ed4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcc22L0m5hv230w0zrZwOS1_T6Yqf71X17W6DxoSe9Oz1ZHxNDBym9neal8ElWM-hA-FrHNYitIdek7MCWg1oFXKQlaX3wvFIyBk4SvJiWIBkM9vOfj5VFu0dNhjFiPEb0Pqfe8E2cQ1CiKkkgiNU0FUDlIuOQ.jpg?r=ec4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa-M70U4H5OXNtG9CR27VqYd-1TfpKgQM4FkSIylThfnQX6to-nPBfYj0wUE6K73T4VNYffwVx90Y3Z-mpPRObR85qEJuzNV8ApwLmCTHc-ubefzfCQ4M3q_ORUM.jpg?r=8fb",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSOuF-4t-QPtyPtxZxWEggYXfQQ5wArEGjqZxGMwXsWvh9jxcCj55vB3-UjkddTml7a3-JDfDSBLA2UAZ0DDBJx3TfKjKH0Ev0E2kzQ3GkXVkNqSjovl2ggmF6co.jpg?r=d3e",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABY-M-WJkYPcvM89yxSYm7GLKMk5mMGTVi1IqRY49EBaiKmVo8_ojowMR3Ng9KD0mnqOegKNh64NjEcIertKVHETl_S7K6GZ_lD7OJd91KcEuZiEHYF50oYB8IMEr.jpg?r=88c",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG5wo4aymYTAV5_96Z3IEf5YrsNYYJoiFpFgv9mevtO2QHY6-BLqB1lipEwQghuaLKAOuuCmeD2a3LDcJ3LxEV2C72aZ5A1AXxeMpFySDnIcxW1kAR2cKLtKxS9.jpg?r=6ed",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7"
    ]
  },
  {
    "title": "Assistir novamente",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVXrQbNheqKEBeLUcQatDcMx7TcSczhs92aMYP8SVHPKi7VOyLFgip9w2iGOMOMh-Y9j5oBMol1ZDd2PIIQ8Bn0qROKR6-p2Z0BP_a0ymsr7mDbS7uiVGO_lyLe5Qw8UMgkLKOeABmF11dm9w5o3VSPs1x_QTA.jpg?r=2ee",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdoILx8NQ8uAvqLGihKufqOREbDvMex0AQff0U_moB4iT4QXyjNJJShePypB1eQ8fe_rYdfgv0DcWtBIAlkz79F3Hw7LcQGU_t8QLiMEsFpDuxsZvOXSkoX0qw4o.jpg?r=54d",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcnQsbBQu61afmkyp8ft_3M9PdZyWir6xsH6fMDR8T4utftwR47FaloCa0jodNhK_QHjn9F5XW85UmZYW2_IsGe4nHlr6hOxTKokENeK4BFjE7h2QLOIh4gRunDm.jpg?r=933",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQFcSnTMuyBcbV5PNwf8BPlqZh1T3VnHvgHGiM5KW13ui1-b_WibKOSIY3ZSj6XNOjRs2YsEmesqwb03_IVQthRSQIYaGLf7jLCvLQ6XcbQfnkQ0CBUI_imPqg2lVDuHHhD6PiKbv0K8hXKJQZZMmuKXyL7jlw.jpg?r=762",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXVpUlxWh2mVzSwSCSwYmAW-wkKmm9MuQH9mUxXIU0AbHJ_DmF-Hu5Ck8FiR28tpqmttNKqH_nhjz021u8kt4tiu4aBxnSdrnHjOjYZsZvh8T_CLM66YAkXvmdSy.jpg?r=8b8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa-M70U4H5OXNtG9CR27VqYd-1TfpKgQM4FkSIylThfnQX6to-nPBfYj0wUE6K73T4VNYffwVx90Y3Z-mpPRObR85qEJuzNV8ApwLmCTHc-ubefzfCQ4M3q_ORUM.jpg?r=8fb",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABex-j0nxvsg98YAm1bOmFORO1q8EadmI5NZMKAMXvKKj8MNY7dhDgquLH4UMEAsPjxJDy3HzFxv_o44hvC8JiMjD2eislER-A_mnSFcF9YTVHWaYjGtcSo19JGa0.jpg?r=ed4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTluQ4BV2_laws-uFCTj8h8CdYuOFkf14E7InNae7khB-ARlW5nY82Fi743pch7b-MmXFHkjXhiVcHUvy4I1hum6aKDFmDOl_Twx6-oiar5it6SEiGCjJ2wsvSS2.jpg?r=6be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRF-yGoofBkfcoESpR7D2DJDfjKtdBXXJwzp6Zz8sX5Ef_TnZg0wgWpYOIsaYEOfbreikbwfKITOxTgBuzc_E4PgZHynORoYKKdmxGyXCYDsUj8JQRyTfcGX5gf5.jpg?r=752",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABY-M-WJkYPcvM89yxSYm7GLKMk5mMGTVi1IqRY49EBaiKmVo8_ojowMR3Ng9KD0mnqOegKNh64NjEcIertKVHETl_S7K6GZ_lD7OJd91KcEuZiEHYF50oYB8IMEr.jpg?r=88c",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfHK0uP1i7GZWFrlUBUxo_px1k8LXfpQBpARhRNGDBQr5c4H1q5s0mv_5SwVW2VR-cofg8Tuhz9MpFkDgHzg-IcTRxx3oCZN6JXvk2yYWYaM7I5gfQi3pQErrWTF.jpg?r=e6b",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcc22L0m5hv230w0zrZwOS1_T6Yqf71X17W6DxoSe9Oz1ZHxNDBym9neal8ElWM-hA-FrHNYitIdek7MCWg1oFXKQlaX3wvFIyBk4SvJiWIBkM9vOfj5VFu0dNhjFiPEb0Pqfe8E2cQ1CiKkkgiNU0FUDlIuOQ.jpg?r=ec4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG5wo4aymYTAV5_96Z3IEf5YrsNYYJoiFpFgv9mevtO2QHY6-BLqB1lipEwQghuaLKAOuuCmeD2a3LDcJ3LxEV2C72aZ5A1AXxeMpFySDnIcxW1kAR2cKLtKxS9.jpg?r=6ed",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSOuF-4t-QPtyPtxZxWEggYXfQQ5wArEGjqZxGMwXsWvh9jxcCj55vB3-UjkddTml7a3-JDfDSBLA2UAZ0DDBJx3TfKjKH0Ev0E2kzQ3GkXVkNqSjovl2ggmF6co.jpg?r=d3e",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABW2AANoAfVEv3efHXKaOhtH2SdY37AcaUaQagEVDcakH3MTNvgAWSi_gc1NUfiAgnPLMJ3cBJBQS2sEXETHWGuuj_kvn7L9q-U3vSdM-USH3aPVYox_cgOA75hLA.jpg?r=a73"
    ]
  },
  {
    "title": "ORIGINAIS NETFLIX",
    "images": [
      "./img/posters/original-netflix-1.jpg",
      "./img/posters/original-netflix-2.jpg",
      "./img/posters/original-netflix-3.jpg",
      "./img/posters/original-netflix-4.jpg",
      "./img/posters/original-netflix-5.jpg",
      "./img/posters/original-netflix-6.jpg",
      "./img/posters/original-netflix-7.jpg",
      "./img/posters/original-netflix-8.jpg",
      "./img/posters/original-netflix-9.jpg",
      "./img/posters/original-netflix-10.jpg",
      "./img/posters/original-netflix-11.jpg",
      "./img/posters/original-netflix-12.jpg",
      "./img/posters/original-netflix-13.jpg",
      "./img/posters/original-netflix-14.jpg",
      "./img/posters/original-netflix-15.jpg",
      "./img/posters/original-netflix-16.jpg",
      "./img/posters/original-netflix-17.jpg",
      "./img/posters/original-netflix-18.jpg",
      "./img/posters/original-netflix-19.jpg",
      "./img/posters/original-netflix-20.jpg",
    ]
  },
  {
    "title": "Favoritos da crítica",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTluQ4BV2_laws-uFCTj8h8CdYuOFkf14E7InNae7khB-ARlW5nY82Fi743pch7b-MmXFHkjXhiVcHUvy4I1hum6aKDFmDOl_Twx6-oiar5it6SEiGCjJ2wsvSS2.jpg?r=6be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVXrQbNheqKEBeLUcQatDcMx7TcSczhs92aMYP8SVHPKi7VOyLFgip9w2iGOMOMh-Y9j5oBMol1ZDd2PIIQ8Bn0qROKR6-p2Z0BP_a0ymsr7mDbS7uiVGO_lyLe5Qw8UMgkLKOeABmF11dm9w5o3VSPs1x_QTA.jpg?r=2ee",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQFcSnTMuyBcbV5PNwf8BPlqZh1T3VnHvgHGiM5KW13ui1-b_WibKOSIY3ZSj6XNOjRs2YsEmesqwb03_IVQthRSQIYaGLf7jLCvLQ6XcbQfnkQ0CBUI_imPqg2lVDuHHhD6PiKbv0K8hXKJQZZMmuKXyL7jlw.jpg?r=762",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcnQsbBQu61afmkyp8ft_3M9PdZyWir6xsH6fMDR8T4utftwR47FaloCa0jodNhK_QHjn9F5XW85UmZYW2_IsGe4nHlr6hOxTKokENeK4BFjE7h2QLOIh4gRunDm.jpg?r=933",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXVpUlxWh2mVzSwSCSwYmAW-wkKmm9MuQH9mUxXIU0AbHJ_DmF-Hu5Ck8FiR28tpqmttNKqH_nhjz021u8kt4tiu4aBxnSdrnHjOjYZsZvh8T_CLM66YAkXvmdSy.jpg?r=8b8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa-M70U4H5OXNtG9CR27VqYd-1TfpKgQM4FkSIylThfnQX6to-nPBfYj0wUE6K73T4VNYffwVx90Y3Z-mpPRObR85qEJuzNV8ApwLmCTHc-ubefzfCQ4M3q_ORUM.jpg?r=8fb",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdoILx8NQ8uAvqLGihKufqOREbDvMex0AQff0U_moB4iT4QXyjNJJShePypB1eQ8fe_rYdfgv0DcWtBIAlkz79F3Hw7LcQGU_t8QLiMEsFpDuxsZvOXSkoX0qw4o.jpg?r=54d",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcc22L0m5hv230w0zrZwOS1_T6Yqf71X17W6DxoSe9Oz1ZHxNDBym9neal8ElWM-hA-FrHNYitIdek7MCWg1oFXKQlaX3wvFIyBk4SvJiWIBkM9vOfj5VFu0dNhjFiPEb0Pqfe8E2cQ1CiKkkgiNU0FUDlIuOQ.jpg?r=ec4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRF-yGoofBkfcoESpR7D2DJDfjKtdBXXJwzp6Zz8sX5Ef_TnZg0wgWpYOIsaYEOfbreikbwfKITOxTgBuzc_E4PgZHynORoYKKdmxGyXCYDsUj8JQRyTfcGX5gf5.jpg?r=752",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABex-j0nxvsg98YAm1bOmFORO1q8EadmI5NZMKAMXvKKj8MNY7dhDgquLH4UMEAsPjxJDy3HzFxv_o44hvC8JiMjD2eislER-A_mnSFcF9YTVHWaYjGtcSo19JGa0.jpg?r=ed4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABY-M-WJkYPcvM89yxSYm7GLKMk5mMGTVi1IqRY49EBaiKmVo8_ojowMR3Ng9KD0mnqOegKNh64NjEcIertKVHETl_S7K6GZ_lD7OJd91KcEuZiEHYF50oYB8IMEr.jpg?r=88c",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfHK0uP1i7GZWFrlUBUxo_px1k8LXfpQBpARhRNGDBQr5c4H1q5s0mv_5SwVW2VR-cofg8Tuhz9MpFkDgHzg-IcTRxx3oCZN6JXvk2yYWYaM7I5gfQi3pQErrWTF.jpg?r=e6b",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSOuF-4t-QPtyPtxZxWEggYXfQQ5wArEGjqZxGMwXsWvh9jxcCj55vB3-UjkddTml7a3-JDfDSBLA2UAZ0DDBJx3TfKjKH0Ev0E2kzQ3GkXVkNqSjovl2ggmF6co.jpg?r=d3e",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG5wo4aymYTAV5_96Z3IEf5YrsNYYJoiFpFgv9mevtO2QHY6-BLqB1lipEwQghuaLKAOuuCmeD2a3LDcJ3LxEV2C72aZ5A1AXxeMpFySDnIcxW1kAR2cKLtKxS9.jpg?r=6ed",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABW2AANoAfVEv3efHXKaOhtH2SdY37AcaUaQagEVDcakH3MTNvgAWSi_gc1NUfiAgnPLMJ3cBJBQS2sEXETHWGuuj_kvn7L9q-U3vSdM-USH3aPVYox_cgOA75hLA.jpg?r=a73"
    ]
  },
  {
    "title": "Sugestões",
    "images": [
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTluQ4BV2_laws-uFCTj8h8CdYuOFkf14E7InNae7khB-ARlW5nY82Fi743pch7b-MmXFHkjXhiVcHUvy4I1hum6aKDFmDOl_Twx6-oiar5it6SEiGCjJ2wsvSS2.jpg?r=6be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABfHK0uP1i7GZWFrlUBUxo_px1k8LXfpQBpARhRNGDBQr5c4H1q5s0mv_5SwVW2VR-cofg8Tuhz9MpFkDgHzg-IcTRxx3oCZN6JXvk2yYWYaM7I5gfQi3pQErrWTF.jpg?r=e6b",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSOuF-4t-QPtyPtxZxWEggYXfQQ5wArEGjqZxGMwXsWvh9jxcCj55vB3-UjkddTml7a3-JDfDSBLA2UAZ0DDBJx3TfKjKH0Ev0E2kzQ3GkXVkNqSjovl2ggmF6co.jpg?r=d3e",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTG5wo4aymYTAV5_96Z3IEf5YrsNYYJoiFpFgv9mevtO2QHY6-BLqB1lipEwQghuaLKAOuuCmeD2a3LDcJ3LxEV2C72aZ5A1AXxeMpFySDnIcxW1kAR2cKLtKxS9.jpg?r=6ed",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXVpUlxWh2mVzSwSCSwYmAW-wkKmm9MuQH9mUxXIU0AbHJ_DmF-Hu5Ck8FiR28tpqmttNKqH_nhjz021u8kt4tiu4aBxnSdrnHjOjYZsZvh8T_CLM66YAkXvmdSy.jpg?r=8b8",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABa-M70U4H5OXNtG9CR27VqYd-1TfpKgQM4FkSIylThfnQX6to-nPBfYj0wUE6K73T4VNYffwVx90Y3Z-mpPRObR85qEJuzNV8ApwLmCTHc-ubefzfCQ4M3q_ORUM.jpg?r=8fb",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdoILx8NQ8uAvqLGihKufqOREbDvMex0AQff0U_moB4iT4QXyjNJJShePypB1eQ8fe_rYdfgv0DcWtBIAlkz79F3Hw7LcQGU_t8QLiMEsFpDuxsZvOXSkoX0qw4o.jpg?r=54d",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQFcSnTMuyBcbV5PNwf8BPlqZh1T3VnHvgHGiM5KW13ui1-b_WibKOSIY3ZSj6XNOjRs2YsEmesqwb03_IVQthRSQIYaGLf7jLCvLQ6XcbQfnkQ0CBUI_imPqg2lVDuHHhD6PiKbv0K8hXKJQZZMmuKXyL7jlw.jpg?r=762",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVXrQbNheqKEBeLUcQatDcMx7TcSczhs92aMYP8SVHPKi7VOyLFgip9w2iGOMOMh-Y9j5oBMol1ZDd2PIIQ8Bn0qROKR6-p2Z0BP_a0ymsr7mDbS7uiVGO_lyLe5Qw8UMgkLKOeABmF11dm9w5o3VSPs1x_QTA.jpg?r=2ee",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABex-j0nxvsg98YAm1bOmFORO1q8EadmI5NZMKAMXvKKj8MNY7dhDgquLH4UMEAsPjxJDy3HzFxv_o44hvC8JiMjD2eislER-A_mnSFcF9YTVHWaYjGtcSo19JGa0.jpg?r=ed4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABY-M-WJkYPcvM89yxSYm7GLKMk5mMGTVi1IqRY49EBaiKmVo8_ojowMR3Ng9KD0mnqOegKNh64NjEcIertKVHETl_S7K6GZ_lD7OJd91KcEuZiEHYF50oYB8IMEr.jpg?r=88c",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcnQsbBQu61afmkyp8ft_3M9PdZyWir6xsH6fMDR8T4utftwR47FaloCa0jodNhK_QHjn9F5XW85UmZYW2_IsGe4nHlr6hOxTKokENeK4BFjE7h2QLOIh4gRunDm.jpg?r=933",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcc22L0m5hv230w0zrZwOS1_T6Yqf71X17W6DxoSe9Oz1ZHxNDBym9neal8ElWM-hA-FrHNYitIdek7MCWg1oFXKQlaX3wvFIyBk4SvJiWIBkM9vOfj5VFu0dNhjFiPEb0Pqfe8E2cQ1CiKkkgiNU0FUDlIuOQ.jpg?r=ec4",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRF-yGoofBkfcoESpR7D2DJDfjKtdBXXJwzp6Zz8sX5Ef_TnZg0wgWpYOIsaYEOfbreikbwfKITOxTgBuzc_E4PgZHynORoYKKdmxGyXCYDsUj8JQRyTfcGX5gf5.jpg?r=752",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcs9P4UtrQruhWBx_a_t2YRXmCOiSgNT1q2_m93_nnBWX2eYGSX6coLztrgXgVJfpY8SY9F1hjVKtRbdoxJqcb80t2F_xmv6YAMor03CbITqN_WGDMA_IiWVce-S.jpg?r=7a7",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTay7E67Z-j9oPPX0awx3knoXeJFUlIARHLwVSmr1fgnrCZfdXBhm4_IYgPpmUOD-K2NTZUZAoewutQjnC2bPBdz97ifGLmPvsGrBpp7Oqo2xC9FNc0oKD4FRSdATjj-Q9Hf9BVLB43j5Z9C7VRmQyYXD9FhVA.jpg?r=a74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYmzPeejGwpXH_p_KHG2uBBLN8dRDAWBqVa3q1IRYpjynRnLci_u6hsd1L_bDtBqshrorRBU8StQvzQMcFLmtDVH8z5fIemZEpVMJs-rP6PR-3NpIcx_zRKjRFShBmJlZCnkC3M-WxIqqlk9R1XlwTVgYkiJmQ.jpg?r=0be",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABeAqZ8FUYGoRgvfMcl--PAiQjCoX225DEFmloBOsmfPWkHmWrmXnAfTJM-xlQ81dcKC1moxCC9VkgKBmH4S7oi7TihuCsQXjxHOEvY5mivtqydNymDhYNTf6iqql.jpg?r=e74",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVAyBhsrXoeoAJ39PUdH1QcelhnuVuyEQ1FWsnaysn85LDxjQnS8uBl8wsz3EiqMzdmfuYxuweo57MQ0RdUhPMT_PcTFguev-IW7NgbflOPN6irzmVdWpzwEVa3p.jpg?r=081",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWLByEMikfISov25yWQiKL_y_32m8ZF7whmlZ2JPjEgF39XpfXwWKDDxi0ZWrs7cowY2Kc72U1NCda5WprJpjD_yQMYl02CoV7PmCv5Xehro6rE4oCJgVMl_Pafn.jpg?r=2db",
      "https://occ-0-1429-1740.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABW2AANoAfVEv3efHXKaOhtH2SdY37AcaUaQagEVDcakH3MTNvgAWSi_gc1NUfiAgnPLMJ3cBJBQS2sEXETHWGuuj_kvn7L9q-U3vSdM-USH3aPVYox_cgOA75hLA.jpg?r=a73"
    ]
  }
];

window.onload = function() {
  const container = document.querySelector('.main__container');

  data.forEach((obj, index) => {
    if (index === 3) {
      const contentSecond = document.createElement("div");
      contentSecond.classList.add("main__content-second");
      contentSecond.style = "background: url('./img/posters/second-content-bg.jpg') no-repeat; background-size: cover; background-color: rgb(20, 20, 20); background-blend-mode: overlay; width: 100%;"
      container.appendChild(contentSecond);

      const textImage = document.createElement("div");
      textImage.classList.add("main__text-image", "right");
      contentSecond.appendChild(textImage);

      const imgSerieContent = document.createElement("div");
      imgSerieContent.classList.add("main__left-content");
      contentSecond.appendChild(imgSerieContent);

      const img = document.createElement("img");
      img.classList.add("main__left-image");
      img.src = "./img/posters/second-content-poster.jpg";
      imgSerieContent.appendChild(img);

      const imgTitle = document.createElement("img");
      imgTitle.classList.add("main__focus-image");
      imgTitle.src = "./img/posters/second-content-title.svg";
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
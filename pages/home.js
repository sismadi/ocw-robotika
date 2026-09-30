pages.home = [
    // 1. HERO
    {
        section: 'hero',
        title: 'Open Courseware Robotika',
        tagline: 'Dari Definisi Robot hingga Robot Sumo Berbasis ESP32 — Satu Semester, Satu Robot Nyata.',
        description: 'Platform belajar terbuka untuk mata kuliah Robotika. 16 modul terstruktur memandu mahasiswa membangun robot sumo fungsional berbasis ESP32 dan aplikasi web kontroler via WiFi — tanpa framework berat, tanpa jalan pintas.',
        badges: [
            'ESP32 + Arduino',
            'JavaScript + HTML + CSS',
            'WiFi Web Controller',
            '16 Modul',
            'Robot Sumo',
            'License: MIT'
        ],
        cta: {
            text: 'Mulai Belajar',
            link: 'learn'
        },
        imgClass: 'di-robot'
    },

    // 2. KEY FEATURES — diambil dari 4 bagian kurikulum robotika.js
    {
        section: 'features',
        items: [
            {
                icon: 'di-code',
                title: 'Fondasi & Perancangan',
                content: 'Definisi dan sejarah robot, jenis dan fungsi robot, teknik perancangan, sistem kontroler, serta mekanik robot. 4 pertemuan untuk membangun fondasi sebelum menyentuh perangkat keras.',
                linkText: 'Mulai Bagian 1 &raquo;',
                linkTarget: 'learn/modul01'
            },
            {
                icon: 'di-web',
                title: 'Sensor, Aktuator & Kendali',
                content: 'Sensor ultrasonik, inframerah, IMU, dan aktuator motor DC. Sistem kendali kecepatan, PID, serta strategi kendali robot sumo. Diuji di UTS dengan standar desain robot.',
                linkText: 'Mulai Bagian 2 &raquo;',
                linkTarget: 'learn/modul05'
            },
            {
                icon: 'di-setting',
                title: 'Kinematika, Pemrograman & Visi',
                content: 'Active Force Control, forward dan inverse kinematics, firmware ESP32, navigasi mobile robot, dan robot vision. Dari robot yang bergerak menjadi robot yang melihat dan memutuskan.',
                linkText: 'Mulai Bagian 3 &raquo;',
                linkTarget: 'learn/modul09'
            }
        ]
    },

    // 3. KURIKULUM + CARA SITASI
    {
        section: 'article',
        leftCol: {
            subtitle: 'Kurikulum 16 Modul',
            lines: [
                '### Bagian 1: Fondasi Robotika',
                '**P1** — Kontrak Kuliah & Pengantar Robotika',
                '**P2** — Definisi, Sejarah & Jenis Robot',
                '**P3** — Teknik Perancangan & Sistem Kontroler',
                '**P4** — Mekanik Robot',
                '---',
                '### Bagian 2: Sensor, Aktuator & UTS',
                '**P5** — Sistem Sensor & Aktuator',
                '**P6** — Sistem Kendali pada Robot',
                '**P7** — Review & Integrasi P2–P6',
                '**P8** — UTS: Evaluasi Tengah Semester',
                '---',
                '### Bagian 3: Kinematika, Pemrograman & Visi',
                '**P9** — Active Force Control',
                '**P10** — Forward & Inverse Kinematics',
                '**P11** — Alat Pemrograman Robot',
                '**P12** — Mobile Robot & Sensor',
                '---',
                '### Bagian 4: Visi, Perancangan & Evaluasi Akhir',
                '**P13** — Robot Vision: Formasi & Sensor Image',
                '**P14** — Perancangan & Pembuatan Robot',
                '**P15** — Final Review & Demo Project',
                '**P16/UAS** — Demo Terpadu RoboLab'
            ]
        },
        rightCol: {
            subtitle: 'Target Proyek & Cara Sitasi',
            lines: [
                '### Target Proyek Akhir Semester',
                'Mahasiswa membangun **RoboLab** — robot sumo berbasis ESP32 dengan aplikasi web kontroler via WiFi:',
                '```javascript',
                '// Fitur yang wajib berfungsi di UAS:\n// ✅ Robot bergerak maju, mundur, dan berputar\n// ✅ Deteksi lawan dengan sensor ultrasonik\n// ✅ Deteksi garis arena dengan sensor inframerah\n// ✅ Kontrol manual via aplikasi web (WebSocket)\n// ✅ Mode otonom dengan mesin state\n// ✅ Strategi dorong dengan Active Force Control\n// ✅ Navigasi dan penghindaran garis\n// ✅ Dokumentasi lengkap: firmware, skema, panduan',
                '```',
                '---',
                '### Bobot Penilaian UAS',
                'skill:25%:Fungsionalitas robot (gerak, sensor, kontrol):Utama',
                'skill:25%:Kualitas firmware ESP32 & aplikasi web:Teknis',
                'skill:20%:Inovasi strategi & kedalaman analisis:Strategi',
                'skill:15%:Dokumentasi & repo (README, skema):Profesional',
                'skill:15%:Presentasi & demo robot:Presentasi',
                '---',
                '### How to Cite This Courseware',
                '**Wawan Sismadi.** (2026). *OCW-Robotika: Open Courseware Robotika*. Figshare.'
            ]
        }
    }
];

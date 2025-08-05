'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'
import { ContactForm } from '@/components/ui/ContactForm'

const SupportPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const helpCategories = [
    {
      title: "Getting Started",
      icon: "https://via.placeholder.com/24/6366f1/ffffff?text=GS",
      topics: [
        "Platform Overview",
        "Account Setup",
        "Basic Configuration",
        "Quick Start Guide"
      ]
    },
    {
      title: "AI Features",
      icon: "https://via.placeholder.com/24/6366f1/ffffff?text=AI",
      topics: [
        "Campaign Automation",
        "Content Generation",
        "Performance Analytics",
        "Smart Targeting"
      ]
    },
    {
      title: "Billing & Plans",
      icon: "https://via.placeholder.com/24/6366f1/ffffff?text=BP",
      topics: [
        "Subscription Options",
        "Payment Methods",
        "Usage Tracking",
        "Plan Comparison"
      ]
    },
    {
      title: "Integration",
      icon: "https://via.placeholder.com/24/6366f1/ffffff?text=IT",
      topics: [
        "API Documentation",
        "Third-party Tools",
        "Data Import/Export",
        "Custom Solutions"
      ]
    }
  ]

  const upcomingWebinars = [
    {
      title: "Getting Started with ADmyBRAND AI",
      date: "August 10, 2025",
      time: "2:00 PM EST",
      host: "Sarah Johnson",
      description: "Learn the basics of our platform and how to leverage AI for your marketing needs.",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "Advanced Campaign Automation",
      date: "August 15, 2025",
      time: "1:00 PM EST",
      host: "Michael Chen",
      description: "Deep dive into automated campaign strategies and optimization techniques.",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhAVFRUVGBUWFRUVFRcQFRUWFxUXFhUVFRUYHSggGBolGxUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0vLS0vLS0tLS0tLS0tLSstLS0tLS0tLS0tKy0tLS0tLS0tLS0vLS0tLSstLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEIQAAIBAwIEBAQCBwUHBQEAAAECAwAEERIhBTFBUQYTImEycYGRB6EUI0KCsdHwM1JiksEVU2Nyc6LhQ6PCw/Ek/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMhEjEEQRMiUWFScYEy/9oADAMBAAIRAxEAPwDx2JKsLaDNCR1bWNdGONs5MsmkWFlw4NVj/sIYp/DqvosYrvhijR42byJp6ZkrngwFU13w/Fbm+xWbvxUsuKKOjxvIm+zI3NtjlUEa5q2uxQCLvXBKNM9iErQVbQZq7sbDNAWQrScOFdOGCZw+TlaWgm24GGFSS8AAHKrvh9E3Y2rtWONdHiy8nJyqzCXvCwKobu0xW44gBWZv1rmy40en42aT7MzImDUtvDmn3a70VZLXIls9JyqNhllYZq/s+DA0Nw9a1HDhXdixo8jyc8l0BL4eHahLzg4XpWyAGmqjiAqzxxo4cfkzcuzB3tliqa4ixWu4ivOs3eLXFlhR7fj5G1sqwhJxVlZ2OahgTer3h6VOELZbNkcVoIsuDg4q+tOADtUvDI+VaS3AxXfDFFI8HyPKnfZQScFUDlVVecOx0razgVTXsdUcESxeRK9mHvLbFVEyYrU8RUVnrta48kKPZwZG0AEU9FpjVa8CtRIxZhlUxt/eY50ofbYk+ymoxVujpnKlYU3AJkETMoxMmtNwfTkgEgcs42FaGx8FFojM8qLg4Cs4jZjt8IOe/tU1zxcWcTRBFa4lwXkYBjEuMhQOQY7H2GPas3bQSSthFZz2ALn8q6VFI4XOT9l8PA0sgJiUtpGSVYSDH5Z+mazN1w4xtpYb1ruC8N4haN5yAxFQXIZ1QsqjLDyyctsD0ozxfLHerHcRx6WkX1gf70Z1AfMD67U3BMysjXbPP2ixUTgVZ8X4dLbSGOZdDgAlSQdiMjlQDVNovFkITNN/R80TElEeWBSULG50Z1JKs7OaqVhU0MpFc0ZUztnDkjZ2NzjrV1BejHOsHb3hHWixxL3rthnSR5mXw3Jmovrod6z97PQUvESetCvPmp5MyZXD4rh2MuZKB14NGkZppgFcr2d8WkEWctaHh9xWVUYomG6I61XHk4kM2Hmei2N2O9E3N2CKwtrxIjrVjHxHPWu2OZNHk5PDadhd/cVnb2arC6mzVJd71HLI7PHx0AXD70TaSYoVo8mibeOuVXZ3yqi/sJ60nD7ispZ7VYreaa7ccq7PLz4uXRsjeDHOqq+uh3rOTcVPegpL8nrW5Z0Qx+E07DL+eqC7ko121VE1rmuWbcj0sSUOwGFquuHS7iq82+KkiJ6VmFpm8lSRteH3HKr+3uNqwtk8hGpUZhkDIBKgnkM9zmr9LG60TsyFP0fQJFbZgXOFAHU7iu6Ezx83jWy7mvB3qqvLsVcxeH445vKuJnYmN5F8kAAmPzPNQs2cEGPHLr0py20Edv8ApscIbERdUl/Wrqa5Mas45HSg+Wd6byL0Yh41dmAv3LZODjvjbflmqni9pJCwWRCpKqwB6q41K31BFezTTWyQSNNEqx3CWRnVBpEbypJ+sRf2SCFavPfxTiCXaoGDBYLddQ5HTGBkexxXNk2elh1SMM1bLwsiKqFuQWS4YdwpZQPp5X/eayGmtnwRdSEDm1o+P3XlBA+351PEtl87+pNxHiUcHlsLWKSWWJJnlm1SnVJknCZ0AD5Gny8Q4g6r62VGXViLTEiL/wAQR40bb+rpVmPDk1wkEyQagLaJUdmRI1dWbJbV8WBnbvj5VCvhIxhpJr+GNDlXZHa4JJ9RRtHM7ZxmrnG2gXgF0rTaFAOIrnMhzqkJhY5OegxtS4VJm0b2lGPqq5qSC54ZZlnjnnnl0SKuI1ijy6FN9R1Y3oV/1MEMJ2Zy0snTSpXmfkoH1rSZlxKXjsxaZixJOEyScnOhc70FqqG8u9bs394k/c8qHMpqDns6443QcsoFdaeq9Xp4elzH8ZW10Cm5pwNcp3DxXc1wV2mI4aQrtdWigslSn1xBT8VpIw2ROKaq1I1NFKh2SxCj4QaDhqytxVsaOfKxFDQk0dWpWhJlqkokYT2V3lVNDFUmmp4RWFErKbockZFckWjFWo3SqcSCnsrJIzRHCrLzJUUqWGRkZ05Ubt6um2d6kZauPDRAMmTjUgjDf3fNkRGP+QsPrWVBWblkaiTwi3b9XiQZBEbHSsTMDj4cZVTgjUDnOM9aqLi2Kk7HAOM47jIB98dK9V8VcOtIrKVU+JAQuCcA/pBOAN8AMW2B+ea854wSHK5OOZGds5Iz86pSaIJu6CPDHhxbwT5LAxxkppxvIQxQNsfT6G/KtPwnhNvbXGlYI2DXUcIMq+aQjW/mHTq66gDn3rHWHHprRSIW05dHJGcnQG0q2+CnqOVI3oDifiK6n0CSdyIv7PfTp2AyCuN8ADPOstpFIqTPRLTiL+Slw8yi1a2cSDUiK108r5zEMevVpOcbAdql4j40sSzgyZDOTKUUvrMVxEI9JGxzDGxzy3rx1iTUiWjlc6GI74JH3pc/wjfxL2zeXX4giQq/6ModDcgaD5alLhNPqzkl9RLE9aqrDxjdQrEsZVfKRox6dWtXfWdYbIO/LYVl0HT/AM0VowM/l1XPf2oUmwcEgvifGp5y5kmdvMIZ9yAxXZSVG23Tt0qofJP9H5Yq2vLqBoERYSsqk631ZDg8hp6EVVN2HP8ArYe9KZrGiE1qvD5ZY0kOQEZsf3nhb+1KLzIQjORt6jvsaqVt0tvVKA0nSI/Cn/WxzP8Awx+8RyLGvZgyz6jkk6WyM+nGQAOQAIGMYxSh9WOa5KjR+JeENExa2kM9tzjZSWCKd9LD9nGSM8j881SycWuPL8nznEfLQGIT6qNj9aNseNBDlXaBuuka4T7hM6o/pn2wNqnu+O6jqe4iJA2ZYZHf6awB+dVtfk50mn0O8PcNht2S5vQSmQyQrgvIea5HQZxtzPtVZ4n4prkkOAHlPqUHIiTORED37/LHehL3jW5Meosf/VkOX/cA2j+mT71SM+alOaSpF8eJt3IeWpZqLNLNRs6KJAa7qqNTSJosKBia6GptKplyVXp4aoBT1p2KiTNOU0wU8UzJKr1J5ooeu1qzLRIz0zNcrlIAiJ6sILgCqlWqVXrcZUTnCy5N2KheagA1d1VvnZJY0gnzKfHNig9dc1UuRrgW6XYpPdCqjXS8ytfIY+FBrz1ZeH3Ls8KgFpV0pqOPUrK4we504+tUGuiLK8MTahg7EEEZyDsR7H3G4oU9jlj1Rrhxy4uWKS7Rhi0yhdOB5nmMpPMHVkAd8UBxG4WeRjH8eT6M51bnPlnqfbmemeQDv/ELSLgF9htqfUFPLIAA9XueXbO9USSb/wBD7VqWT0icMN7ZZM2ohRuW5exoaOB5JBGqksTgL1zV3wfFw5LECRfSsp2DM3pHmjv/AIvvnmLfwhwo2t3K0xUi3Dh2BDDbmVb6c/f3oUbG5cUzT+FvAkUKCSYBn5ktyHso/wBf4VecTu7O2QGR8AkL8I5kH39j1ryfj3j66nLqj6IydguzBeQAPQbfnQHAvDN5xDLRJqUMFaRnVFUnB9RY++epp/IlpGPhk9yNZ4i8MLJm4t2DBiTlTkHJzjfdT89j0rFPK2rcb8iO/cGtV4IMtnfNZ3BKr6keNs4Y9AM8gRuD8uuKJ8U+H4ku0MkpihdsPKF1lRgkNgdT/HJptWrQk+MuLMraWbO4CqWHPJ2Cjfdm5DG+SdhiprmZLYFYvVIM/rcYx1Ii6rtn18zjbT1Oin1wvBGhSM5aNjnMmk6SxbqQ2nYbDPLqc/I2rST1557r368tXP79sy0isNvZXSyEn+vpXFkrjjBx8x9qh71z2ddBpm2H2+39CpeGw+fKsRkVNZA1ucKuerHoKrwdj8x/X8KZmnzM8AriMBikaPUG0kjUpypx1B7UNqpppprDZRIeTS1VHmlmlY6JA1cL0zNcJosKOUqbSzWTY8GnA1Hmug0ATBqcGqEGu5p2ZomDV3VUOqu6qdiol1Us1FqpZosKJc04NUINOBp2KicPXddQA13VTszRNqpa6i1UgSeVFhRIXpuujuGcLeVwAhbcbfzo7xzFBHchIVVSkcYmCbJ52+vSBsNtOcdc9c1jnboo8TUeTKQPUiBm+EE/IZ/hQymt1wrhzqClvbfpTKhkc+sIFPJgBg+Yea53G2Bzq0I8jnyS4mQtVDOAzaQSAW54BO5oviNqkM7JHKsqLykUEBhjng707jMIKrMqkBzgg7kEEjBPU7Hf5HmarrdufyPt0oetAtqw9G02+QcFpPyUfzraX3DpLbhDOSAZWTVvuVODgfddvY1jBE7wR6VLYMjNgasKMZY45Ad69J/EPbhcAHLUmf8AKatDpnPkf2X9nkIBJrW+IpWSysI41KRtG8rDJIebzWjZz39KLjsDV3LxO04OotRapcySJG9y02QPUBIkSoM40gqc9/ytLia3dbeKOxNxb3C+ZaxNKyNFNqKzx+aTlV9Pw8jgGsxjXs3Od06Mx4luZf0Thtwx/WaJVD7ayI5cRkn4iAoABPb516RMqXtgHwMyRYz1GVzj6b153+IPDZJT+lRvA8USxxOlvIHW1x6VjxsSpOSCOpPbJ3fgJieGR57MPzYVSHbRDMlxTPJeCOyzqp66lwfcHA/zAU24jALr2kPfk23UY69x9aSZW8GP99j6eYRSv2PmS/NPboPf/Q1J9HSu/wDBl1fxG3EX6OBKGDedqOSCo9JHLnVL9R/Xyp93gMMcsDH3PsKhU1GUrZ0RjSJ4VzsMknAAAyScjYe9X/DOA5bR5TTyj4kDaYoz2kdd2b/CpGO55UP4btT8YOGcsiN/cVV1TS/MKVA92PUVax3jXX/8tpmG3Rcyvg5Kj4nkK7kZOAg+IkdTtSEVVslkk7pFrdcCWKEObuwjfODAIYndRy3MmWPT33qq4nwd4xqntI3Q/wDq236lgP72kfq2/wAv1FQ8W4dw+2leF57stG7ISsUIBI2JGZOVTw3kdpALizlmZDN5UkM6oEb9XrzhCcHbGeYqlr2TSl2mZriPDNCiWN/MiJwHA0lW56JE/Yb7g9Carc16BPbxEfpUCkwzgrLD0yDl4z2fqrDkQpHxVi+L2XkSlAdS7Mjf30YBkb6gj65qGSFbRfFk5aYHXM0q5Ui5ylSpUhiruabSoAfmu5plKgVD813NMzSzTCh+aWaZmlmgVEoNOBqIGnA0wokzThT4rYnn6R77flR9usa9z74pcgULBrazZ+laPhXhxn9RwqKCWdvSqgcySak4LcxGRUMRwTuxP+mKK/EOzvkHwg2YOV8nJX2M/XPz9Pbes7ZTUOisvPFCwIYrIYJ2a4Iw59oh+yP8R3+VZUtnc9eZO5J70zNLNaWicm32Soa9VnWMR+m5aKNJmlITYu0dvb+XHG2fjKliMjnq7V5Mpr0Hw9xafyg1vHHLpVRLFN5bBZlysVxGr9QukfTfY104H2cnkR6F4nEam5ZsOBcMShYoQ7iNpOW+kMWHSsmvFAudEEK/NDKf/cLfwqx8RzkJpdw8juzyOP2nY6pMY2IBCDI2yGrOqN99s0skt6NYoLjstx4huNGgSsFIZSF/VqVbZlKpgYx0r0nxDeJJwaJyNRBiOOmdgQew2I+teREYJH/77Z7VtfBl/wCfGbOZsRsGCdACc5P3Ofoa1ik26ZPPjSSkhn4g8NkmnS8jjbyrqOKSMgEgHy1Vo89wyn6YrUWsMttFw+yk9MkkV6wDNp8uaZHERPZgGxv/ALzuKytl4j4lweRog7lEOCjgvFyIXGfh77EcqyN/xCWeRpZHZ3Y5ZmOST70OSizSg5rvRsOA8Mmt4L97iGRYxB5RDKUzM0sflDcblWGr6e9ekcI02nD40dgpEeTnbfTuPu1eS29zf3zQiSSV0TCozksihME89iRtz3O1bj8TeNQ/oUEYIMzEl8fsqNtJHucH901SEklZDLFyko2ZG18TS3M8KyLCViUKuYkJ0JqYesjVnc75plzxOIvJqtYz61UlXlQ7YHcr/Cs3BuGYbHGn6t/4DVOPSi53yS3z6DH1IG336VFZHR0vEkyaWWzYjKXCbD4ZI5RvvyKL370xbS1b4bpl9pYCB942f+FVdwcscd8D5DYfwou/4RNbrHJIhVZV1Rnoy8sj61O79FuNezUWNoqQTYYOI7Q4ZNQUmWRzkagD1QbgcqF8IXEqQXfkyNG5FsA6FlIzOFPwerryAJ9qsfCN4WgktvTi6tzDk8xJFI7IB9HT6VVeFhpjuwRjAt8g7YxdxAg5I79SPmKt7RD+Sf6JLrwrPIS7zqzMSWZo7wkk8ySYMk1d+HvB8l1A1oJE9FwksknrVUj8hgWOtVPYcqKluVTQGZU1sFDMNMYJ6u8V62kAAnOOlS+MfEcYsHhsZG8pZY45pCSWnZ0kYnWTnQPLAHcew33xitk+c5Uiu4YsCve2ttI0kKhZYmfGdaEIxGNiMsN+oUVmvEkYMUTD9lpov3QVljH0ExH0q4/C++jge5llXWBAyhcZyWYY57fs/nVdxrjNu1s1sID5yzlxNq9OnSEK6e/pH2rEmnjNRTWXRls0s1ylXId1CrhrtcoAVcpUqAFXa5SoA7SrqqTyqZLfuaAIKkWMmikhA6VII6QEUFuM77/wq3RVA/ltQllDqbBq0ubIhfTue1NDK1xvtU1uUHxKT8jihfOIOCpB7YxT1mB5EUrGom18F8Ciuy3qZGHwkEMAemRjcVZw8dns3aCYbqcMD27juCOVZHwzxs20gdTkA7gV6bxOyj4xb64dP6Qi/qznGrr5bnsfyO/emv12adL/AK6M3xjwjacRQy2jJBccynwxSfMD4G9x9R1ry2/s5IJGilQpIhwytzB5/UYwc9c1puF8WeKU4BR42w6NsQQcEEexFbH8QuD/AO07SO/t01TRDTKF5vFgnOOpU/kT2oTszOFbXR5DRthxJoQwVUOrGdS5IxnkQQRz374FAg13NaTa6JtJ6ZaWaSXk6pqUM5CgsQijoB2UUPf2zQSNG2CyEqSDqGR2PX51Jwfhcly4WMHJOlQAWZmPJVA5n7AdTTuKcKkhJ15256lKMP8AmU9PcEj3rdNxuidpSqxkNuZGXHXmScAYySxPQAAknsKPn42wMSRnEcOoRbAN6iGd2PuwzjpyoaaTyYzEc63A8z/ANisfz5M3yUd6r1fr9qL49Bx5dnv3hziFrfWyq4V8gK+QCcgYwyn8vbvTB+HvDtWvy1741Pj/AC14bZX8kBDRuUPcHGfn0NaJfH16q48xTtz07/kcV0LNF9nHLxpxf1Z6h4t4nDw+2AjQAfCMADGQcBR+yCM715RxVI7iEziVmnDHzYsYVIsLokU9Vyce2RnuajifGp7k5lkZuoHJR8lG1ctL0xMrj41zpzuuDsQ46jcjHUN98TyqWvRXFgcN+yLyzlYxzB9Xsx5j6D880TcTjJ7L/wDHYZ/e0jv6foDp7RVUTxg4kyFB3MZxlkY9SBuD1XHXIqknfp8j9P2Qffck/Opv6l0+RBImD/R+e9OkuXZQrMSB8IJJA747UzJH/nrUsDKrA6A4GcoxIByO6kHb/SplC08O3QUhCcEtrjOcYcDGP3gce5Vc7VslgSXzpUh80zIFngV/Jcssiv5sR0nJJTdcZznrkDzSTY47bfz/ADzWlsPESLAwZHNzrTRKGwpjHxCQZyX/AMQ54Gc43tiyJaZz5sbb5RHzf7PB0va3kbDmBNGSPo0QNHwWUdxbm3s4rj1SxyPJP5YjQIki7unX9ZyxnajuF/iboQJLbxy43BljErD21ZG30oHxJ+Icl0AFjVFUEBUHlLv3AJJ+4qnKC9k6yPVB3iK4s7KzigtiWlGoyyEY8yToMdVU4PtgDmTXm5NS3Nw0h1Mcn7ADoAOgqKufJPk9HTix8Fvs5SrtcqZU7XKVcoAVKpEhJomK29qQyCC2LewqyXh6Adz71JDBjeuyPigQOYwK6FqN5N6ej0CO6aWKa8tQtNTHsNhm0nIoz/aW2Kg4PwKe63QaU/3j5C/IdW+lbDg34bq2DPdNjnpjQL/3MT/CmrGU/DuIROCsyhl6hhnNTw+CEvVZ7NtDLvoclkPybmPzptz4NYEmKdSuTgSAqcZ2ORkHb2FWH4ecYFtMYpNjnBz3pIbjoEu/w2u7aF5xLG5RSzRqGGVAy2CeZA9qg8E+J2tplIPoYgMD0zW+/EvxQLK38tVJe4RhG37KgjDEnuA3L3FeKcNfBI+RH0olp6HB3r8m7/GOyWO5gu4vSbhGLY5F49ILfVWXPyoTwT44Fo2mRmWMkE4BbSR1AHMHJGKP/EuPzOHWE+fhLJj/AKiBv/qNeZ0PuxJuNoseP3kc9zNLFGI43kdkQbaVJ226d8dM0ADTaVBk9B8I2Czfo1skrILgt5sgGl1RE1yqvzO2eukfKrrxR4dSxlQRs7RSh/LEh1skkWCynIAIZehHxAdqrvw9vYo34fI5UBJrmKQkgY8xFMbMe27DJ7VrPxYuilzw5Y1BHmeYM+pWOuMYPcYG/wA67Y1SPOknyZ4lcqQ7Bjk6iCeeTnc5+dRSHoP6/rejOK7ysQOejGO5RaANckuzvjtIfqI2P9fSnMOX88fxp4mDfEP6+Y3H5j2ouCTSMLy59H/1B6dqErE3QJFGx5D7b/mdhR8NsE+Lc81XqT3P86a9ywIycA56BNxy3OcfOoHm6jfvzx7amO7fLYVpUjLtl7Ddxwx/rP1nnacop+FQcgr01KckE8zkciapOJ2pjbmGBw4YbB1blIPbmMdCCKFmfJznn1/0HYUfw2cSL5DkAE5ic8o3PMH/AIbbA9jg9DluXLQlDjs5xTjL3KRK6IPJXQpVQpYZ21Ecz71V1teA+EjNIYlRHkXJk82Qx28BAyyuyHMjjrggD33xOOCtJlUFhKQSPLUBGyDghSjBz881r4pS2zPzQjpGDpy96v77gWWKpG8Uo5wOdQb/AKUnU/4Tv2J5VQyLjbtz+dSlFx7KxmpdDKs+F8H8+OWQSxqYl1aXbSzjOMIOp9qrK6DSi17NNP0cNKlSpDFSpUqAHRwk0ZFa1YQ2vtRkVpSArYraio7fFHG3xTkjp0Fgpj2oC6Q1o1tcigeIqkK6n+g6n2FMRl3bBp0b9qjuJy55ADoB/OoqyaDVQE4LAfnV1wmOBCG0hj3b1fYchWYxXaYWemy+I4UGGkUY98n7Deqniv4gyFTHbrgci7cyOoCjkPesPilTsLLKfj1y/OYj2GF/gK5ZXD51liSCMZOar6IsbkRuGK6lBBK505x0z0rLHF09mr8fccM0VtA27Rhnf21hdK/YZ+orGKxByKI4jdtPK8rYy5zgcgOij2AwPpQ1Mzey24l4hnuIIrd2HlxElQBjJOd2PXAJx8zVTSpUDbs5SrtKgRb8BvY11xTA6JFIBBxokH9m/uAeY7E1q50lGlpr4XBjjIgwzMkSlAC7agNOlf2R1A32rz0UZc8UmkUIznSAq6QAoIQALnSBqwANzmrQyUqZCeLk7Qy6udUjOMj1ZXoVA+DHuAB9qhlYsSWJJJJLE5JJ3JJ60yrG34PM8D3CpmKMhXYY9JblU9stpFdTyfauY+o/r7VxqyMdn2H9fOlkmm/Wi+F3SwypI0YkCkEo3wsB0NNdifQMozt9f5/17VY8BX9YWHNF1L/zllSP7O6n92oOJXCyys8cYRWJZUXcKOYA9qO8OMBI3ziP0E8ef4/lW4r7GJP6mikZZZk4bHLohVHMjL6vNlWJpTqxzAK4+eT2rC71qvDtu0fFPLbmHuFPv+ql3Hsc5+tbLw7wwaJIorHMaqhxdR6Xu5fMRMMx/slUuCFU9d85q3F5Dn5rEvzozHBuIyNotr0MNYBglkBDDV8AJPxxtjAPT5cq3xPw8+qQjEiELL/izssnzzse/pPWjPxItpY7iJpZWd5IY5DnAEZOrMaAbBVI2xWhkS3lt7W6uJSEmV4rnSAzLp9GsDmcnS37tarknF+jF8Wpr2eW0qkuVUOwU5UE6SRgkZ2JHTIqOuNnehUqVKgBUqVKgDbxwCiFTFPVKkEdMyDPHmnQw70TooTinEVt0yRkn4QOp9z0FMZNxC9S3TU37q9WPYVhL+8eZy7nfoOgHYUr69eZtbnJ6DoB2AoesjFSpUqAFSpUqAFSpV2gDlKu0qBHKVdpUAcpV2uUDFXK7SoA5SpUqAFUyTsFKhiAeYB2P0qGlQnQVYgaeW7gfwpua4aAHZHY/cfyroYdvuf5UylQBIzkj/QbURwqYLIMnAYFCewYYDfQ4b6UIvau4App07E1ao9IlltlvIL9tccTLom0rrMVwsRjdSM5KnmOp3rVcN8XLIV0TW8uMbazZyn1wt/ZzeknEPR+bV5x4e4iJFdJBrUqBLGeTgEBJFP7LjYZ9lPeu3fguVvXasJYzyyRG6+zBsA/MH6CuxSdXFWcEoRb4zdFp+Kkcs0kU36PMiJEiMzp6Q2tzs65Ujcbg0Nc8KeHhMUzNtMZCqk7gAhdh2Ox+tWfhfwFxCVGWWRorbGZF80NrC+rARSRnbmaz/jTi/maYkGEAGheioNlx88fkKUtXJjjtxgvRlKVKlXGd4qVcrtACpUhXKAP/9k="
    },
    {
      title: "Data Analytics Masterclass",
      date: "August 20, 2025",
      time: "11:00 AM EST",
      host: "Emily Williams",
      description: "Understand how to interpret and act on AI-driven marketing insights.",
      image: "https://omnidata.com/wp-content/uploads/2022/11/How-To-Take-Your-Data-Analytics-Approach-To-The-Next-Level-in-2023.jpg"
    }
  ]

  const systemStatus = {
    overall: "Operational",
    components: [
      {
        name: "AI Engine",
        status: "Operational",
        uptime: "99.99%"
      },
      {
        name: "Campaign Manager",
        status: "Operational",
        uptime: "99.95%"
      },
      {
        name: "Analytics Platform",
        status: "Operational",
        uptime: "99.98%"
      },
      {
        name: "API Services",
        status: "Operational",
        uptime: "99.97%"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Can We <span className="text-indigo-600">Help?</span>
            </h1>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto mb-8">
              Find the answers you need and get expert support for your marketing automation journey.
            </p>
            <div className="max-w-2xl mx-auto text-gray-800">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full px-6 py-4 text-black text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Help Center Categories */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {helpCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer"
                >
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.topics.map((topic, idx) => (
                      <li key={idx} className="text-gray-600 hover:text-indigo-600 cursor-pointer">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid lg:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions or need personalized assistance? Our support team is here to help.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
                      <p className="text-gray-600">support@admybrand.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone Support</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-indigo-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
              <p className="text-lg text-gray-600">
                Join our live sessions to learn from experts and master our platform.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-500">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {webinar.date}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {webinar.time}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {webinar.host}
                      </div>
                    </div>
                    <Button variant="primary" className="w-full">
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Status Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">System Status</h2>
                    <p className="text-gray-600">All systems are running smoothly</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full ${
                    systemStatus.overall === "Operational" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {systemStatus.overall}
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {systemStatus.components.map((component, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
                      <p className="text-sm text-gray-500">Uptime: {component.uptime}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      component.status === "Operational"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {component.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SupportPage
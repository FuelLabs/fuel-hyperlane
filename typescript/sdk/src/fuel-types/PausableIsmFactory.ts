/* Autogenerated file. Do not edit manually. */

/*
  Fuels version: 0.98.0
*/
import { ContractFactory, decompressBytecode } from 'fuels';
import type { Account, DeployContractOptions, Provider } from 'fuels';

import { PausableIsm } from './PausableIsm.js';

const bytecode = decompressBytecode(
  'H4sIAAAAAAAAA+Vca3BcZ3k+u7riCz6JLUdeJfESbLMQQjaJDQrMxKuulpVYqzrCNlZwZCmNHewmcRTFNg5JQXTaYqZlajIB3Jl2xjS0pDNluru6RLbloB+0YygUDy2D6cCMMpSpA9HgHw11SlL3ed7vPed82nN2A+mfzlQzmvOd2/vd3vd5r2dTV7LOEcdpduSvf8wcS+0j1xYS7rVrvOekXvaczztvzUzknA+NLjmJVG7MGV1KnB0pVs6O5MuJiT6nvatnk+P2rOP1+ZF8ZT71kuOkr97lDP9qMen9arH5iNP0Uip/kfdfwP0XvOJUFrQe9PJnn+P7mZ51k15xPivtQvMk+urHfUf7Ood3zo0Uy470VdiUc3uac7h+HtfPx/T1T9rX13H/6+irD7QOoa9y2Nf5tN+Xlz+fjqHx3VSRNK47g3me8UrTc3wm9VPXSb2Yrn32h+zPK5Zd0HSV5py02Vf+eXMd7Zh+/t28e/6CV5rqxjg/5vWk2yd2yDgXvHw5PdHLdzflvOJZQ1Ponzvu0xwpXnm7W3AXvNJ8N95zM/3NaE+lR5fc/Xh3JY4HsAae3Ctswr0zzwXP5c8OSxt9pV5KY36R8f2A4zuWS/aN5K9scnucBexTN9YDa+Nwn1px/LSXn3YNHdI/e9DQx/iLZ4+bfpuVvltL/+uGfuIq6G8W+oNCH+N3/gD034LjH4J+1lqHE2Ydtk6ir1P+XFIvYW9+Gtmbryr9WdDfYo0f/OOcAP0WHD8L+mZ9ZPzP58LxP6/rVnf8f6r0nwH9d1j0x0D3T0C/DcfPgf64RX/Mom+u16f/caU/AfqZkP4U6T8M+utwfMTLT9n0Jy36J9+A/qjSz4H+Oy36k6A7DvorcHwM9A0dQ/+0Rb/8BvSLSv8W0H+XRf806B7R9T8K+oaOob9g0b/4BvRvN/SdD4P+rRb9BdA9DvrX4/gE6Bs6hv6VkP6c8wb0b1D6W0H/3Rb9RdB9Sun/HugbmkJ/zsiCoZ9uTD95TeknQevJ9+Ycx8vPZ73izBUfb5Y/v2rR4EX1IGQgY7Bg/qq0BWvmr0I+iKNyjzKx/H03m0Ifm/G//Pqav/Cve/nZ7ihOrfmk6bfCfrPa70lpS78zmRhsm5B3SlWuR6fgzWDlwoSH9kCL4+2snJrYhfZQSw7ycQJt0OoAH5ZvW9vjcE12ov15tHNo38Q2MCC5FtjP9cJ+rDXrdYbY0GmwYZprkfSxLPViZD87df0yeK5TsbRd2pxH6RzxlmPNQffdznF5PU67V3yBusesd/FMp3mX+DN7NXWZuBOnF5KvU4d4pcqimT/54TzlFO+CT4pnLqBNmsDhM+QfzgH8M9tpsIzjr6W5+qDuA+ep4z9PPAzHn5O+HG/wXLe0BzZRj1+PPhyzTr1Yp9nF1GXyV9waJb+rfVBfmj4CWqCbP3/a0NmKfTvnBe3i+VzwfPHMWDi+Gc+fT81etOheDFt6jfxl9GZxfiG4XpwL2lGeTq4363xmLtQFET2wkn1tLtSOofV9Id+L3JXryF1S14Rz9OXuoiV3FyF35KM6crf6+/Fy13rD8vOV5+s8t7rmuQ3xz7V804xz/vg+zBXjOn4fZAnzOh0/r5ZHdF7EDN2D+UnLdlmsb7sk5ox8n1EdbGyImr35Gvdmc4/rr+9Y/DiS87h3vM69mZq9vA20xvblhOaYzu9knflt0/lxb/z5hTyWf97MO35+kzq/Ew3mdzSc32w2SmO16D/YhoFti/77Ajs0P+NG30luknc+Vr4gMnQA7zxUPiXtQ2iXyrSvFE/L3SGeVq8EeLqnujAxjPbulklvb/XkxH1o39uy4I1WOifG0B5pxXinJ9HGONY7wNaTirmwqaVNjP0K2xbmflbPm/T8sJ436znxmuctet6t5616TgzneVsUw+cuGxx5htjEebfVx/CE2HRYU/Kmj+E2Bhp8Mhi+FrQvGtpfIW1iWmsD2ieVdoh9pBdi6pyFqaT9XKh7ZrlHLQ1oP6G0KV8+rio90C6du2j62erT5lopts7yneYGtH9HaXvWuJWejPtyzbiPW7qA8tDUgHbJ0J4yetKMW+lx3PNOzbjHDO1doD1zqbE+TmxVHcDndNw+PY57vnO5DpvrM7T3U9dDh/l6MkL3ZqVL/1LH7NPimM9esMZMumpDHCHdC/V1Y6Jd6Ya6LqAlunE44If82cWQN86H9kbxDOXf1425eN2YuEf3k3peceusaRvdyH1W3fg8fdk6utEZVN1o/LBY3Zjo9XXjFxyn7YvtxudP5U87qeKicwzXiFdr+9O5Y9jLEeAE6CaIuxIfeAX/r7rOKbz3JTz7oatCZ41P5/OOgzUztEb6Hfyn4TumpU0/t2vHugW3f9PCaA+u5ctC72m+E9JcozS3WzSzhuZJJ1WadFKDi8A/+N+7gGfAP/i8TWi7maVCDtfT0t45kxsZcpyu3nU5t9CbGwVmY9/cDHzZ1Ctp9plNvZr1+9weM4+cPw9gsLHrsZ5CY2kT9l4w3s0AV3FffYDmBcypVeeUe4M5wbbz57Ro/JIl7NfPy7V7+t7UIPbUzNfNDHWAh3K1z9yW2nnRWTuwDf9ZJ+UB23c4t0BfZKEvXOqL1EvZ2nfuJt3RpewqPJczz3XEPXe7iY24K8Gfln8T4b1VJg7jrMAarEL8ZuXIYHnFO4ead6ZeyXE9DqZeTTda725rvYP1tNbb8D3XG2uPZzRusolrntA1745Z8zfdh+httC0+jaP/KYs+9EmET48bPd2RE3xYIgbLvnRmijPOyN5y68iechvWqx3X2t2hDqdjqJA75jkJrGkbriW7hnY75HV3dyG3ZZfjZG7an0sNjzvu0P7cKHgc429nPA50EfsaQwzFox+/EnPolH56OnhvTNqFlgBvVQ5OWnLwqZg16/PXbKKv2dnSh+t948DqcifkuonXcGwefdlpEZxbop+E+dFmKU3Ttxc/R9ev7zeRCfTh+faOjHlpK/coIzTz0wvgrxb4ay7WGBiQbfcGcu2CCQP0MTF38dF7TXyBPPuK++vw4ZuV+7brYUc1kH2bTy5LH3sxzz2LkLnl+uCok9ipMpcCX6TQj/jocX4nnu2n3Em8bKmZ86au5/jIZ4GvFSOv27WPDehjw5Ze0O8d5/mNPO8ouM6xXuHBNeSrenTQ/w7SGSmVb8R+bOgayHIvutDuMj5weRHjv4C9zJC/iTFeISu8nilsJl9a8T2xdevoLWetsc/9NV/HmE8z5nsq1LuhHSf8ci95fIz7cTn1qteIx9/0njfY740h/SbIEPRh8cptJnYrMYK0rM9g1cFapGVd4G+K7fRvtEWA4z+O7NnnuNYYS19miXbBlGkXMa5ilWM07VLlRHx81BH/DHPoC2NWVcV0yCjfQd8173yG76wFP3AfIecb2AZvJFP/ITbBA16+ghhGhIddtWnoT3FP6L8MB/5LHvY8eaBnM+2AG9Uf6dJ2jb+gsQmxhSpOPTsQffp28enQ5qoydq6+Anyj0FeAHYiYVGBzly/XswNB97jSHQ/tQNAK7MCq+jO0A2GDBvxYZcxA7UDEwoIxVeA7Ru1A9PNb2o8V+4dvF9iBZdKT61ibTmID5K5ra6KZ8dANXKunyWuvOj4vbozBWMVzX0eNO6mdwPZd4MElsaUoUxnMIc05YI59mUHaTFnF71wj7MSeg/YgaIu+EEyapA2pe9pCXap73Rzub3nNfQO0LaUPtzF2JjPSx070Qf1aLF8Rvpc9KSOeE8f3iRtUbjBH4aFu/50oLiY2cA/W9gqPD+qap41cleX5+FidM6R7RxtCY6YV8qHGTCuI1co9rKucX+G5V3BNbkquVTv1Gv0HuYb1audedMGHjsYOnH9Wm6uX9MEPveCHe7w9lYuIB6QZD7i70PJhrHUreRey+1Y8F8R7xH8rlcdGX3Zpr/Wirzz1Z1cPDE3YE/AFWrEOOcp6rR/gFdJrTMwJ9PxcTalC+SI2Ur5asK8e+lxhXxdMHdqEvaZNiL2M2h72XiPmpLy6B7wKPsVYPyJ5wX6szWD5I/QlgC8b9diykb7FUnqQ/vOGwjrkNdzd5JF90G883gfsAn5xTm3WOWwa2e+VPk9iPXab/CP6KaEfHHG+UY/oh7TTnuqctOoc8hfXpFvkR3RwlfpN7mN/T4DuINb8ah18Lig+E5NFP+B5D3F0jRHH2PB8nvY793ugg7w9J+3CZmJUt7T7t8Efrlx9dmDdl3GfNgHuU99WLpl+GJNGXJZt5iGL1c5nC5vSmAex0/CrPQ9fJmROsCuDZ4Cn4VzZ/3MY22QwtkI2jTb0PuJUPVliDO138kQ2s3sreMIjT8xZGOPzhKVLnbEaGzENHhP7E//MT7ZhTPRnMKZtxBbm97Avos8px+hH7MAxyw70cTLiD/v57i3giVQOWPkG/m+NT8e1ELvT6svHtKbaviBjzTX0m6IykTD4p7YjdUXUJkv+QvEONrPoDaMPDYbRLtb8BPSx5idGdoq/RhxY7fa7uQ7IEfx/2n+tjOl09W+ddAfSuS076H/05lIe/I/+3tw++PVuj0v9OT66lHsrbL812ANXbSbV2WLjqe6TGIevy5kr93WiuzzGV74YryNNbN+2SQVTAlsP6xO19Sz+YcxPbLH3GFsM8hvYYuDrwBYrDzeyxaCr/2W5LVbheNQWq4R2WamMWHxU1vH+dNQWgy5rYIvhnX/lO4Z/MY+Ger4Jupj8UcE8IjquTfvm/me1b9h27gbgBHRoLc4kDzFWgLXJZpYgU4PVcWkPzjCvB1sT6/PT2phEMq9xiyx0SiYztC3nDbj0zzKZAcRpBpEnJI0B+AAlxNfY7jfxhxhcFH+IuAkZ31hjfxaNPRXhk3LE/gSPWTGDW9QOse1Mw3+GNzvr24NNr8XYmaZtsDLM1xWrtOX8Z0L60NdWX31x+Qz08w8x9qCxAdUWtuxB+opp6Kq31diDsKcCPvFtNksekukAs2gH0l6Bzabyq7YLZKTXGaM+U/uNthyxAWsX2Ovr0F6va2rfg1+J/cpRt5bXW/kFPtPEZ/xr+lwiBV1NXch+TT4Wx4KbxX877RXJo1Jn9aQZC2BOzuxtr+NRnzD+VDOOd+j5zbrv9vh5D30Hz68TLJJ+hR9Un8m1jLkOny28vshz6FLWSagurdAWEV36ZehR9TV8mi7tOzOXCufiv8M6DnknvjYHOZJA9rFnoY70ZT/Gn7X0EPSfxLf8ceWn06HvGtFNlr5pPZHaQ3sbmJm/crupiRAeNPMvIQ8V2hCIUxjcon2c+nFEJt+msQpgJmMVs6ZNOyk/xf0z7WJV8nNReUj4tVfEWl3/KdozfC+S08Pzl6Q/8DHi2Q702SHWogR4X6wCm+vlKuBrm76sGogZ6jG/BgL7LvfUnp+5xPPl9vxsn16z7fnr6tnz0Nsb1Z7/FulDnr8FeT7nDc4Ym26A9nzz98Sez1foi9+N2iPm5LvV5kautHISOH6nvvtNiblTd8NuPdbsrNe1YGy/fcT49FcDHTA4tQBawORNpNVG25g+f9x9by9qYNi+dyufbcVzzAub54J7UqOh/tD+Sa/fYczWPGONG8+wNqsbeo9yD7+hMoy53SrX+3ida49YItsG9zK4vxm8R94mDeL5KZXrVWjnotgutSJm70oztD0xDlmzdvCtY2Rzlrxk9tp6BnvBPA/eha3K427sndiqkI2ordrQfyF9+A1v0ofBfvwf92HAwz/7TXwYPP/L/4c+zHANPlPnLmicRPTQe+ljw/fXHA5sJomBo96EfYj/Mhzjv1i8196X2os+4CM8BnqMrWE+jAH8NtaBtt69j8GuB/2ysXlph2Gt2O6njTejtjCvz1wJrtOG868beYYuJjbMEr+BDZSpxP019qbUhgHXXsN+wId30lJLqPUzOH8dMvs6+OS19cY2uBW1GmXEN2lTyTO4/0uV77VoH4nKd/UK5rQP73Ti+ADGRv5rNzg/S/vJ1PGUZhdlHRG3g+yvhv44bWQftZMBb1RPY0y7vH7M1ect6z082272QvDqFY4d/V6Kr0lJ/PXy+Pwc5crE56m7tB1jVz2scySePWTdo830sGVHIY5Wfh16mTWurx9FHIp9YDym7kXWroIajGW0DyvtD6H9SA3tww1oH9S5QvZj5/qQyr5VUztl/Bv6mMhxKW6Zvorl36VvuZa6CXUjjH9h3fPgN8ZQaeMRn2+ATCKO5L7r/p5kD/TG5VDep1GHGGcrJZ7VXAHrec2zPbqXUnMH+v5e5meJ6bAhpaYjrLMszTK+6/PJ3Trvy3XmfZvO26oFnaLe9OeNOQbzTuL8E+rDUI+Db517MCbygj1n6Dh3M+bchDmTlj/n9jpzflDnrLgbmfNwOOcZxuzMnDlP7Rd8Qxk21438ETuXyZ9vJ4ut3us8yndQ9xHUwmF88GViaxwGrRi64iv6KM0wV2js+fz0wTpzgz0rc2Ndsr8O9OsU66dZ4w6a9Jvj7Mak+FEY93ZjN7l3s6YW6z6wHCcg18E8pmi3SL0f5v6iygjzE/uj2DOVVgxhLFoxpHIK9O+ib4tjnzeAOn/BTeQ+zL5wnTEPqUlTuwS14qFdQmwiXWIl62VMPRn0FsafAjbR98G4iU14j/pHamiAw2yjhkaO91JfjJGHiSOWLCf2mr0Lcbjm/gNPU4c0zpsdZAz+fvADxpUx8eByhjFiXaMPWOdcv/f451Zd2Ubrml9bxviRf82vL/N1Imt2UUeOPEUR9XD+uhBzkAdXeYVcIc4FeqwNkXvU02Jrwnfgcwa7+Rx5vgnPJdWv8Ol5Fj3Gstux7gm5HtKiTPm0GIOUuJFcQ5xR7Qr9BiWsCWSNiK5Pp7Z9vdZqrctqPffXpE3Pl60H1r6FcfnoMdHkn6ufh7x3EGuPy72fFptkj4kDLJcf5yniWwfmzJjgWnPsATaJf6T7ftDa93db5xxryj+3dAvXnnb+SqzpuJU3YN0CZAb+salvS8JGXaG2hpFT63mpr2P8z+zBCvIN3m0hb+DYtuw9U4tn4ijEEr5n9pfvuXiePCDx5Jr+lucvdjN/4QV7Ltf2MK5M2w/r2DhHFsZbLN+8JjYN/z7ik9v2o5XDExoZy360ZYX2I/PugjvSR2g/QrYj9qMdJ0WcXeKkWY2TKvZKnFRtRomTAu8bxUnbbq6Jk7KeXuOkYoNL28QNIj54K2N8iHUiVh+Jddp+lqk5U94N6Oo+x/spLS9bOlvjARjbDnkvUt+E539u5QX7xWdSncOYVL284FGndcqqCfbzgsQFPy/IuAHv+XlB1Jajvml5XlDer4kjrKgfR2i9Q+1t6rtLsDe2w/97P/ynk3YcYR++uQOd7bjP+sbgWzs77zfaY/h8nzkmqfel1nM53bLkj1F384GB5g9jrO3EBLN32JuGvlDAZ3f8L/ls7tfns9r1cp5uwGcWRiZNfZLyWXTdV/RoTc0O2BdjGlsRDMFa7VCbbxPajGGLPShy6uv0UkW+TYyJf+cjth1jsoFtp7FDE0c08S1et/0XxiT97xdKFdYr+LZmFzEcOLYa12VOMf2/XeNoxCr6y8ZXknoYfCMR9mHimbV9s7/A9kTcP7C3he/U3oKfr+OT+0GMBWsexVMbC1G3H2LhCOoIhGckTyE1b2nmKfzrXV6H46JOcrQna2wJjhGxJa2BjMPJyShOJq5ZeRaTj5MYj9T7cZ2zmSGs815ZJ9hgaI+KLZDNjAhvWvhU0ZqCWtxoWxfFp2oDfGqT+ijaj8pnO8mDIUZVNA8Vh1HNfxvFqCp1pWJUlbULFkZVWbtQg1GwVX8jjGr7qGIU6oeqrF14AFiyD3mhMr5TwD60OhZGPYD7+5dhVLOzWudKOYK+r9BWwNh7J1nrKzq9WAlij/vMNdoFtNFx7ciy+Vn9a9yjxYliGfY6sIcT12Lw4WJtvM/OV1jxHT9HUVPnVB4TP6KENQhlyuRxjQ15un7t04ovW3vo55tM7bmZI/y5ah/4IPSJ8xXzfZr4UMy31o2F77bi7j5t812c0Vl27iv8FoxxvKBeCjyv9VKsabbmavl05ct2zrh+/m3Fj5TXkd+m3yp4xppQ1l+dRL+X0R9lxZ8nv5X254l8ed15duk89Zs/mWe4/vlK+N2JqbcL56Z1ZVJvpvVfMl+1FYFjF2NwzMIRJ+SdsHa4U/SqfDOJHCDriPHNZDhv8UVk3qgjXoE6YubYVlHm3EJzrqPQ4ccc2mh3dxV25UjP3d3h1xE7rCOWPMZ9xInCAmqKHWkPdTDWn6ascS9QV3wd6or5/Su++dDvkExd8ek6dcWYb+Bv+LIS1FfY3wlgHVG3kZZaC8njRL8J8OssLFlrMTFUqYGoiv1VYwOV1R5AbFX4SXLHyP8w3pBlbTLyGdQP8JWZdyZP1Mam2/r1m07JNyiuPgRb5U5jq/i5L8mNMJ+ttkoVse5GtspbfqLYTvnrM9g+Q5wHtvNb0UoW9sAWjbVK7Bf0T6LdZ+KxU5ca5cvhu38VNCiHqlsri1H8XWlqGkvgK//7MsSWgnxqEd/g+9+uQkYb1B9vV5kJax1NrkVlRnI4KjOIY4V58fAboHwVMa24Wo+Vf6S0iQua/54m1vj5b8bq/fz3RmD4XcDwrcx/W7UBF2Lm/nyAlWFtAGNIfm3Atpj4svm2yPRbro9Nq5qiWDkd4jC+YwrXYNr6bnY6rHE1NZ9+X7GxVszhO9oPafhrE/xOBN7TumpZmzTW5g6szZ3LawMgQ2F8J85X1Vor0WOosYjYKJ9NlSBjkr9A7oqyFsovbOlGNdHN7ZpTvos55eV02yv6zZWfY7bz5OONc8wrzi7PMUvOUnPMqC+iT4Mad9DnemuNDuo1JC8Z/7sSiB8+GS9DrXutvY7aTdB/8XvX+vv6XhBflfoF3z6XepAIX+1XzKB9r/VbU6b+QfhXfvNDvymv4jvTerZe8larpkR5byrk7bzkDZT3gDmhvFrf0FcCf7dmjOY3AKw6ZdALvy82dbc+T74NPPkO8GTGl9enyRPRugYL85tNPhWYDwzeSgyuwdXtmDvz0H5t/ZxVW4+6pkaYvLJvuf+I3/AI/UfoDnej+jQmVl3C95HEa6NH+J1KAz3ShG+nqvDtInzwc6sGTOuwgItsG5u9To617Xp9j9/5mfwb8gUBL/RIbFjjy6zPiuzTfyr2Ky8J/9CHNNg/CH6QOn2pzcL3/ORhrFmUl16I0SH0Bw0fYhxYR+QYIINBjH+K+Ru1xapBvD+Ko8nvx+gV5n19vWLZxdPW95Yifz6fBj7Pctqrb4zRK7T5fD41OGr49Bbw6e3g06zFp8jvLsfNIvz4Rx7df/ThA6NHnhg/IL+sdOzAxKEHn3CcQ4+Pjt9/9PED+80PLjlyguPRw6Z16PChI4fuf/jQJw6MPvrxwwcmHj94aJzPPXr44SfMFfOe35w4cPjRo4cfqHka+m7i/sOPP3hgovb6t+XPSf7wM9959tRLf7f5qfmrz/3ZfSPfrpy661s/mnjyrx5a8/LYt68+s+OP3//a164+0/PRa/KHiY2/59ltN/75zTvcdx765E+GHxt5/7q//NqlG75RXj/Uu/py+/s2Hl//0W+u/vtPv/iLbU33/M33vnDTf3/qZz+66Ysfy3/jv56880u51NS1X/3jHcM/WDCjKJ7SIzQP/z4IDSpHvf5BvV7Q64XTesTXjPzrxSrLsWyOdz5ljpkr5vh27Az/1l4wx+v0963aEaHlX4vSazr4P41kcvMISwAA',
);

export class PausableIsmFactory extends ContractFactory {
  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, PausableIsm.abi, accountOrProvider);
  }

  static deploy(wallet: Account, options: DeployContractOptions = {}) {
    const factory = new PausableIsmFactory(wallet);
    options.storageSlots = PausableIsm.storageSlots;
    return factory.deploy(options);
  }
}

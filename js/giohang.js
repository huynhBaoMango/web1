var mangsp = [
    {
        ma: 1,
        hinh: "../img/nikesatan1.jpg",
        ten: "Nike Satan",
        soluong: 1,
        gia: 12000000
    },
    {
        ma: 2,
        hinh: "../img/sales1.jpg",
        ten: "Nike Satan",
        soluong: 3,
        gia: 3000000
    },
    {
        ma: 3,
        hinh: "../img/sales2.jpg",
        ten: "Nike Satan",
        soluong: 2,
        gia: 3000000
    },
];

function napsp()
{
    var t = document.getElementById("datarow");
    t.innerText="";
    for(var i=0;i<mangsp.length;i++)
    {
        var motsp = mangsp[i];
        var tr=document.createElement("tr");
        t.appendChild(tr);
        tr.innerHTML=`
        <td class="ma">${motsp.ma}</td>
        <td class="hinh"><img src="${motsp.hinh}" style="width: 200px; height: 200px"></td>
        <td class="ten">${motsp.ten}</td>
        <td class="soluong">
            <input type="number" value="${motsp.soluong}" onchange="suasoluong(${i},this.value)" style="width:30px"></input>
        </td>
        <td class="gia">${motsp.gia} vnđ</td>
        <td class="tong">${motsp.gia*motsp.soluong} vnđ</td>
        <td class="xoa"><button onclick="xoasp(${i})">xoa</button></td>
        `;
        tinhtongtien();
    }
}

function suasoluong(index, value)
{
    if(value>0) mangsp[index].soluong = value;
    else{
        value = 1;
        mangsp[index].soluong = value;
    }
    napsp();
}

function xoasp(index)
{
    mangsp.splice(index, 1);
    napsp();
}

function tinhtongtien()
{
    var tong = 0;
    for(var i=0;i<mangsp.length;i++)
    {
        var motsp = mangsp[i];
        var tonggia = motsp.soluong*motsp.gia;
        tong += tonggia;
    }
    document.getElementById("tongtien1").innerText=tong + " vnd";
}
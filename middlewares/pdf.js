const QRCode = require("qrcode");
const pdf = require("html-pdf");
const fs = require("fs");
let generatePDF = async (notification) => {
    return new Promise(async (resolve, reject) => {
        await QRCode.toDataURL(notification.policy, function (err, qr) {
            let filePath = `./temp.pdf`;
            let fileName = `${notification.policy}-${notification.id}.pdf`;
            let textPDF = generateText(qr, notification);
            console.log(__dirname)
            pdf.create(textPDF, {}).toFile(`./temp.pdf`, (err, pdf) => {
                if (err) {
                    reject(err);
                }
                const content = fs.readFileSync(filePath, {encoding: 'base64'});
                let result = {
                    content: content,
                    path: filePath,
                    fileName: fileName
                }
                resolve(result);
            })
        })

    })
}
let generateText = (qr, notification) => {

    notification.policy = notification.policy ? notification.policy : '';
    notification.client = notification.client ? notification.client : '';
    notification.company_insurance = notification.company_insurance ? notification.company_insurance : '';
    notification.party = notification.party ? notification.party : '';
    notification.date_entry = notification.date_entry ? notification.date_entry : '';
    notification.tractor = notification.tractor ? notification.tractor : '';
    notification.policyholder = notification.policyholder ? notification.policyholder : '';
    notification.country = notification.country ? notification.country : '';
    notification.custom_entry = notification.custom_entry ? notification.custom_entry : '';
    notification.custom_exit = notification.custom_exit ? notification.custom_exit : '';
    notification.driver = notification.driver ? notification.driver : '';
    notification.pass = notification.pass ? notification.pass : '';
    notification.period = notification.period ? notification.period : '';
    notification.mark = notification.mark ? notification.mark : '';
    notification.prize = notification.prize ? notification.prize : '';
    notification.tech_pass = notification.tech_pass ? notification.tech_pass : '';
    notification.status = notification.status ? notification.status : '';
    notification.sum = notification.sum ? notification.sum : '';
    notification.reason = notification.reason ? notification.reason : '';
    notification.validity = notification.validity ? notification.validity : '';
    // return like a html file
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<style>

   .border td {
        border: 1px solid black;
       padding: 5px;
        text-align: left;
    }
 .in td{
     border: none;
 }
    table {
        border-collapse: collapse;
        text-align: center;
        width: 100%;
        margin-left: 20px;
        margin-right: 40px;
    }
</style>
<div style="padding: 40px">
    <br/><br/>
    <table>
        <tr>
            <td width="10%" rowspan="3">
                <img src='${qr}' alt="">
            </td>
            <td width="90%">
                <strong align="center">ПОЛИС № ${notification.policy}</strong></b>
            </td>
        </tr>
        <tr>
            <td>
                <strong align="center">СТРАХОВАНИЯ ГРАЖДАНСКОЙ ОТВЕТСТВЕННОСТИ ПЕРЕВОЗЧИКОВ</strong>
            </td>
        </tr>
        <tr>
            <td><strong align="center"> ПО УПЛАТЕ ТАМОЖЕННЫХ ПЛАТЕЖЕЙ</strong></td>
        </tr>
    </table>
    <br/><br/>
    <table class="border">
        <tr class="border">
            <td width="10%"><strong align="center">1</strong></td>
            <td width="30%"> <strong> Страхователь: </strong> </td>
            <td width="60%"> ${notification.policyholder} </td>
        </tr>
        <tr>
            <td><strong align="center">2.1</strong></td>
            <td><strong> Реквизиты Страхователя: </strong></td>
            <td> ${notification.country} </td>
        </tr>
        <tr>
            <td><strong align="center">2.2</strong></td>
            <td><strong> Паспортные данные Страхователя: </strong></td>
            <td> ${notification.pass}</td>
        </tr>
        <tr>
            <td><strong align="center">3</strong></td>
            <td><strong> Выгодоприобретатель: </strong></td>
            <td> Государственный Таможенный комитет РУз </td>
        </tr>
        <tr>
            <td><strong align="center">4</strong></td>
            <td><strong> Наименование Таможенного пункта отправки:</strong></td>
            <td> ${notification.custom_entry}</td>
        </tr>
        <tr>
            <td><strong align="center">5</strong></td>
            <td><strong> Наименование Таможенного поста по адресу:</strong></td>
            <td> ${notification.custom_exit} </td>
        </tr>
        <tr>
            <td><b align="center">6</b></td>
            <td><b> Данные транспортного средства: </b></td>
            <td class="in">
                <table>
                    <tr>
                        <td> Марка (модель): ${notification.mark} </td>
                    </tr>
                    <tr>
                        <td> Госуд. регистрац. номер: ${notification.tractor}</td>
                    </tr>
                    <tr>
                        <td> Номер тех. паспорта: ${notification.tech_pass} </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td><b align="center">7</b></td>
            <td><b> Период страхования: </b></td>
            <td> ${notification.period} </td>
        </tr>
        <tr>
            <td><b align="center">8</b></td>
            <td><b> Страховая сумма: </b></td>
            <td> ${notification.sum} </td>
        </tr>
    </table>
</div>
</body>
</html>
`;
}
module.exports = {generatePDF}

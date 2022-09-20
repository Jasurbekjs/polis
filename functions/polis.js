
   const Parser = function  Parser(returnObject, temp, text) {
        temp = text.indexOf("ЧЕТ ЭЛ ТОВАРЛАРИНИ ТАШИШ");
        if (temp > -1) {

        }
        else {
            let space = 0;
            let brackets = 0;
            // get polis number
            temp = text.indexOf('№');
            returnObject.policy = text.slice(temp + 2, text.indexOf(" ", temp + 4)).trim();

            //get tractor
            temp = text.indexOf("Гос. регистрац. номер:");
            returnObject.tractor = text.slice(temp + 22, text.indexOf(" ", temp + 24)).trim();

            // get mark
            temp = text.indexOf("Марка (модель):");
            returnObject.mark = text.slice(temp + 15, text.indexOf(" ", temp + 17)).trim();

            //get tech_pass
            temp = text.indexOf("Страна регистрации:");
            returnObject.tech_pass = text.slice(temp + 19, text.indexOf(" ", temp + 21)).trim();

            //get country
            temp = text.indexOf("Реквизиты Страхователя:");
            returnObject.country = text.slice(temp + 23, text.indexOf(" ", temp + 25)).trim();

            // get policyholder
            temp = text.indexOf("Страхователь:");
            space = text.indexOf(" ", temp + 15);
            returnObject.policyholder = text.slice(temp + 13, text.indexOf(" ", space + 2)).trim();

            //get pass
            temp = text.indexOf("Паспортные данные Страхователя:");
            returnObject.pass = text.slice(temp + 31, text.indexOf(" ", temp + 33)).trim();

            //get period
            temp = text.indexOf("Период страхования:");
            space = text.indexOf('года', temp + 21);
            returnObject.period = text.slice(temp + 19, text.indexOf('года', space + 4) + 4).trim();

            returnObject.validity = getTerm(text.substring(temp + 21, space + 4), text.substring(space + 4, text.indexOf('года', space + 4) + 4));

            //get sum
            temp = text.indexOf("Страховая сумма:");
            brackets = text.indexOf("(", temp + 17);
            returnObject.sum = text.substring(temp + 16, brackets).trim();

            temp = text.indexOf("Страховая премия:");
            brackets = text.indexOf("(", temp + 18);
            returnObject.prize = text.substring(temp + 17, brackets).trim();

            //get custom_entry
            temp = text.indexOf("Наименование Таможенного пункта отправки:");
            returnObject.custom_entry = text.slice(temp + 41, text.indexOf("5 ", temp + 43)).trim();

            //get custom_exit
            temp = text.indexOf("Наименование Таможенного поста по адресу:");
            returnObject.custom_exit = text.slice(temp + 41, text.indexOf("6 ", temp + 43)).trim();

            // get company_insurance
            temp = text.indexOf("ТАМОЖЕННЫХ ПЛАТЕЖЕЙ");
            returnObject.company_insurance = text.slice(temp + 20, text.indexOf(',', temp + 22)).trim();
            console.log(returnObject);
        }
        function getTerm(first, second) {
            let firstDate = new Date();
            let secondDate = new Date();
            let f_month_number = 0;
            let f_day = first.substring(first.indexOf('c') + 2, first.indexOf('c') + 5).trim();
            let s_month_number = 0;
            let s_day = second.substring(second.indexOf('до') + 3, second.indexOf('до') + 5).trim();
            let temp = 0;
            let year = first.substring(first.indexOf('г') - 5, first.indexOf('г')).trim();
            console.log(year)
            temp = first.indexOf('c');
            // month array
            const months = [
                'Января',
                'Февраля',
                'Марта',
                'Апреля',
                'Мая',
                'Июня',
                'Июля',
                'Августа',
                'Сентября',
                'Октября',
                'Ноября',
                'Декабря'
            ]
            //get month numbers
            for (let i = 0; i < months.length; i++) {
                if (first.toLowerCase().includes(months[i].toLowerCase())) {
                    f_month_number = i;
                }
                if (second.toLowerCase().includes(months[i].toLowerCase())) {
                    s_month_number = i;
                }
            }
            //
            const oneDay = 24 * 60 * 60 * 1000;
            firstDate.setFullYear(year, f_month_number, f_day);
            secondDate.setFullYear(year, s_month_number, s_day);
            const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
            return diffDays+1;
        }
    }

module.exports={
    Parser: Parser
}
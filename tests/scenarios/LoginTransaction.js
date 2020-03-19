import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: k6 Browser Recorder

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_0 - https://soba-r200-test.dbh.crealogix.com/ebankingLogin/login?bank=soba&lang=de", function() {
		let req, res;
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/login",
			"body": {
				"_758_xprot": "/$xp2/hk4NqOLqFCK9jy_P8UhbO8V_4z7xJbkyli1CEE4vNZ5havD7l9bCIRxUrgeuUId8Kh!f4szIbhuIQmiIZuE67wGizNQU2UCYI0Ml45AT1glbh_RxknXxDuEuD!ZoVwGGe7sSJLKq0q3SjAC_jCTth03M8legjgII9aqaikaZqzImuPw8yOD82weYorWTOQIxQujC!K_DMfu9DA3ST93ysXcGdZ!CSlQUNA55gMqQtiGyr_1IL9511QbbgkwzH0xdOWH73dKIpmkt5MxUDDwWamgJqsxYiyBDxUvn_29nSfhcRDQBboG9eE63Tnfd5fxCwOhMjuKfeYei5iOU!jpVXtxPzgHjIxwP7yoO5YhKnAtTU3TJ029!Q3zmjhho0MrxIhb9ylU9x!F3bS977pJvY1VsYsNowFDsdNzaXuCt6TzZsq0AXoElhVfIVnTpjyOOQ2B1FFztMiLoBBPdFSlxgqn3U5B4XhGylmIU4HFVVUvRhUzlJSgkR9nc9QDv7SvSi1XDTUTvKW1ZkX_12eHK8euDshicqN9diCpGDIqt3xIsNCfs6wIpGWDfIugNRUicCXruvIOprGY0Os4iWKy2Taf1RJkoRyqgsxlv4MC_PsS5AdQUlVh8y5tYDl2JEqZkuw4pLWvMEAUyeiT6jZ_QWAi3uSPcXUMD1SvlDkNtGE81jteDSxlN15HHwalK44ztTaepEKTghaJcqUduvcehpcc6PDgmAehrs4kMPDXBRfpjHkiJ0mlCijX1nmi87seBIwMBxQIu5Hwo4N_T5idvDXkSmQBwLf5!c3b9Wb5ekuSG9ykjAvwJvCIdAHp9_ZVXah26Rwf0lwZMvl7hwBc7zDTv0hVtVRymY5Z4RKBFkYi86hARlCkeSuvrxb_jqF9tFQP64nhYN8R_t3xzAXq2xC8UlPoqvY8_dmZAVrqcA!QcDOswbysv!RQMA_gsS41I_G1iy8j8euAupxd!hkM_EWuzSrRyXyvrNt57z6XwfAAAEx9oDD2gyz5yz4AoOuBrLBwPcF9oP8TJSgeTwcauyrIYRiWRDWmrj9uBXtL7Tps5!LNFQBF31v9pmyIHEcmlaytdN0pLlInNwIyB_avCZ5oMCp8gvxSHPGH32wMWnNo3DzfLMsGelvs0kvRrtrbCbPdbuN0wBjFTKrubkTOeL84COEOMy4GZEPpIBdeV4V1jIwGGK5WP5C7DaH6GfWNmiZwGtaJkSOzOFocxR4p2yylWtCfMOFPZEDcsX0ALo!9m1k7uPxQHxtUefUWMRCtsgv83zr360AwXEyovZFcCwzIPl4s7FMPNqXvKX7h_XTiv!bXSZtM9YaqTQcgAupPYtNWJe0n1t00JotanuYb6na!RtiZjqkHDQQjTbXq7hkwPabrid!h31HO8cy1_xkdiNnF5q2s!7Qau0kfZAQUGsDlmzTA5T68YZVtja96sj97EQ_T0N9pzvRdJA4qzkJUCtL0CzZp4jfZu12vhTrFl8mtwi6_zP3Q8FPTWBVmDJjLiW5302Bx5d5Ul_TrK118rNJPSyOrXkdHSfhsCs4ndj6AYWrSrrpkPgn3EBAF3_CM2ireK3aF_6l2MKsil2n0cWEbodse0wFRFdeTDbRBPYD8PYu7DLZTspVZ9dBDEoqJpQZ5JBN_eDMQtgCO73pEJNmFwKf7izY7ZJxxDm3iM3lWzxO!SfIM7dsqcNcNTQnKNYDqZBvUStxH!j0Tm1nzcl93IBcIa6f6n4K7zbHoZ5eb97ozWTxcC21sTZiWOutOFc8!NDcr3EsQ2Uit2u5HxXdfDPOWfe9KuEqQ2lORGO8iI9U!7xyHpfj01km5ZXVCn_rSQ6Vpyq54FtsPxMOEf5_vrzuhS8x31c6ATrYwycxrkUKe1lVlUOkITwkmls!tL6psTU5ZGW!8eCpgrn8_DKxOZpzGoKWP4Ettu9Z0ELdOsCf8tL9RSs6J7d9GiEnpmOaCmS5RNBkjHlCQMWZ8qnDcQMLaP5i1hkWGqmuzia7LYfzdLPOoqs!X_F3VyGA0OHb5Jr5K4!VxX83eZuPzFDzYDg0y9z4utF!_ClzJdMNu6uYmqFbTk9Ryqoujw!w2G4Bh9bAY5wLJSzKJUKnMb7m61uN!IrkPYp!ERIzoztfeJnubRs5rSzVtlVouDgUMJyQZPY8_d6bSe!1YPJhB5UaQDxAWGTNGkNYaCNb8sCu96MyFG0Zbx6kLG!oT7TpthZ0AcU_cv9KWfqsfbDiAtcwTlWK15dZ5nCehQm7OXvzdgKcl5ennlz4nZad8uYqOWxuP9ypykGDLOtX0eL6VKeSsIAokokFd6hJgmwPtGiJqbm4dkUXYEEguQj99Da0DOa5E4raecbJFVeWvqCv2sej96y_2bpMm9HbSv17UL4PjOrdYc_6155j_2HPV8ixvnEozcET2cEQFqKu8QTJDNeOmi79m2IxO5ACM_Hs9rtB3CeZYmEOVr7uIZnlhGELh3tEwM!GbNbZFV7AOhL9CS!yol0HOZHC1a1DCRj2iyMYlFcJQDPJUuExckixgFa7t8YFn7_XJFVcGoAqihDYBANtHNrKGnfuUMZdOTgrHnatltq8WFCU4NWrNNuIWrRz0W!e89NejE3PJLmttrus7AhQ3ELihX1!!4dyRQ70auFdK!ZBNw1Pp!v0nt_aPhMIak4l049IvsetbQ2jCRvQMDpL93QekUV4nnuFFkktMi0YqoVd80TaC7eer_bNt0WMBWxkxkxabmn1!elxUQ!VV6BLj6jJ1C4Bmf4v0Ivw_KCqmaXvvtvGuHaOjsd6vyCu_hATi3DM_CaAfN_5CQKOYdHam8SvlR7VIidvfu1ldkv845FDRgkWDvAWVPsQW37OlkT5EWJC4tEgDeMREKMMLBa6oqtj8OEPiKP8yMJ4pEUnkFne1woiUuaHbJM9Ou_LG0m7MjjfeHu0B7nPQlpgTzZfkgBa1jhLEnNhaLZQUa!EiplaEV1CC35X!4FW5_YYOiJwUYAL4_Ga!IaNdKH8RrCMpljyHzKcgHfk7lPIOo1pJ5KQ9Off_1eQTttM!skH0iERbyti_DhLZiSxGMg6ahvWZNI7QAVoSnFB!6sxHmOMQAE7NW65LkpkDMbEW9aWEyhEHUjZLOhmJSdiKszyLFdxZeNeZ91aXVREsMiN38EeRWrJf9ScGKP9VaPBUjuJwSQfPd_1FMnCNseMX34JCc_UkgjrpoWtPhG4MM2QZ_F4WbZGjiL5X0RF!7_WXB0cPTplldMivEv2pAdFSTp6LS_qjs8wHveZ1A2UFVqfXwNFZf3txbA!Ldy5y5X7akTCwMAjpxxB9odKezK36nNfz63T9_VWtgHIW0pbnUtTd5gI!EQskvMzJ0sG97CfCfhxRf4K8E0yglTbO_L0ipbgqZrV8RG6GfdCbBNFs5A65cogSpHoodu8Gmx5EcCF7LR7xw8BXptusL6FL71ifwTTJQzSvO6Mjn3ClYNzE8gFYCsQwXqAMM16VSL7PQR!sCh9b7dhi5BE!GLMt6XVbwSGBOUZ6zx4_6CNNQgFpEgxKtj9YEz1kHcIb3JQTJpmG4TszKuD_b28s0jL9Q7qHJOQNz6anCiitZhg_kIu!xSR_HcyCAnnmrL8PX1mrNv5LRNbu8ZztRemQfCeTLANV71njCN2eMjpy5086Xw7TUpBbvzQ4W3jjz8VCEceJ2LxD!ruzS4MvXiwkb80Vkuk!4AsO0knmoosRi_FDT2Cu!uST7AfUibFyAWO6rUZOlBPBsqRN1QRRSAbVvaCSHvH7hNsOWBPArHsChyeBh7pzGayIHku8Uf4NBV6k1VBPPEG1uMcE0h5OvmBb!hbiJY1IT8hHmThbWSeVaEXHSLTZMRgc1FRuYxLaK57mD7lXag6Fx56fU6wOHq2Moe3M2FHVSlZchJXOu9CIo7hDzFV8qRYAq6MTFIGjm2o1ZANPCQMhlwMLyhVop1k7DrQImurb6J5e9L2RR8drZg7THIyc_fU_ehtQI57aRQnZfJrBglagj0V!FI2QbD19KKFmo07roaZj7DRSaE0yuie6c5ym5uvh2Yeq_JsyWO69_yP!W_KWIKpoaPvLNhSC6WKcUrPkacTbFC_MNDjM2LZADIHkfdACUQQZvvz3F6jwnNKcFvvwqFHo_AjV!zVgrJ5RlBWBaCyPxSLje4Fk7N1ZV8pOqSinuJNPRdsGpLYb9_Owv0IM6oVyuXjv5zhSWo_uMz8k!UeF_LKD0PeQjhFvf6GdgFa!0rB98M!geUc8_V51eqCyRgq2I5Asj_yCnVyHiHYkKwmg9J3VmImbu4bSQckS1xijrW35VcJvK4PonEdUEQwpebJ3pH957pzdgVXiCOGRj0Omgr0PM1m4M9k42T5vFcuMeWVy_SZPnpE57Dyw6!xuaO4wJXxdtgyDE8h6yAlM!ivqyN4J!Ns__HpqtNp4eB6TTWTE38HJzzjKUhNjyt4TbqgbIIAvfJ8KHQ!wPGLljjbzMefHgq0pm9y5IBzqWnrDJxIZMXtTSiToOGY1FiiiD7Lst0UI1trLNgK10ag6BCLj17SSS1CU3DPPbeeVGI_AvAEUQnEjJEIv8KPmSdE!PJQGKMayGGY5SDpgfJDB0_59lc7241zyREnWLiuDv6_3o6IlfCaDJvJyA4_KZCAA!VgAFl5GC4izMP4CTOhjo2uWODhTmdkAXO8YWFwWhtqJHq7wSTMt4RFOdv8hq95nmXEh4adgqMNzFAY0kSX6i4wA5ViI2xr_EOUvPMyZn6yqtyBb61ljnwR6zPDO!W5ymJeaTlEBQl4rYV_U8vPy_xUfxdsQ5PYFLwcqXcWVdqbq1vkSECOh0UaB8zlzsQUBAThGwPerd6J0c3gCdNQ1peIyNoZKPm9dq3WdOwaOjd_IIMTYv0Xczeo0qZgwNvwcjRU6mwkxKaau_muIWTsqY5XMZstsLHlH_hlW!OyfonKwbt6eiQcC1FT7sN2VfOJA3C9M1mE8FaVJBbVGGNuc9dy7iO77jv8MOY9DF7XUtCXZzEJKBCwYUQthTpBgytxlixwVFbMIDq2wiMEA7C1AZFio!upO2_ILfA1aWAQ7TwY8uGEd2JLhCx0Kpzv9ed8KLxtFMWz5HVAjoUf7_3u6zYL2tlYhqo1NvKMQQbX1jRaHIJdrflOUV7d6A_JfEu2U9CTgoi20iRdmCXVrC4fASO9HLmvNerfVgIjm0QmI1hcvgg3R96HzHwY6reBl0szdNeEH!ZCxiWycAMMeT0jiNapu2vYj9!deOjqhZvHf__TyrcfaWMW0nFq9gQjq_a8PXQRmy5W0gEwNi_HtrbrGCIuPuBK_q8GrRIMlpMoqFqTi6!vQi15qzhCS5o_RsIiG0!l2pQE1L1O9vA6HIzWAtW6SvxTPiZKk0w6EWJuXutHoE0qaNN39Ci6rkIug8zGgSyrKjoj5EKyfF3m7hLYimNe!X9w_khLYEeSmjPoGQ45QUrhpyp9Q8r1MyyWNp68wnoyLZywjTubIfQKjMgyIjjM2CWQDhzaCuuN1Vvko3N5KJztXiy3wkroLO2jQuTISp59peJbi!_cBG3wVdqRKEjRnHA1Xj4oic0NHr5vm3vyZRWgy_YG6qPngySM8xoHecajH3Uljkp9IxQXYDL8K2hHARZeJfdQuIGKVBOkZnSE3MzVMvrJoMYqy2hH1lvWcHTi!lfOJGjtCFmaHX1cuABpgt9pL3NTEETuHe4!Mq6NIm4Sb6vp13bxV!BPpURyts46bFzemSFIy4!rLNbHBD!H0iSLEL3zxb7sFQtTff_CJ5HyuOK13FNqcx_VjsXYggOKJCqgGh1lwrEkWxRpzGQgTvPt2KVgWam9OLiCqaew6p_KI9c6TMAH5vuxiCsOx6O67f57KuI6Chw1T8XTz9MPSkeHzRm53mvOpalMDKDhaz!dll8hylX0oThzVTPjilU5_Ef3wI1RSYT5KNPLPbRMqppGWHI5C99c1kVRZMJ3ak15EnS!QiOT2J1kJLylpmUEzVRccMr3GzZe2HYrF9iuQv1pqa1U!wArCcY9nUEIGQ3X_tMis=",
				"authCategory": "d",
				"bank": "soba",
				"dateOfBirth": "Geburtsdatum",
				"deviceName": "Gerätename",
				"encryptedPassword:SX:": "g3VCMhdQSKxL4DjfTBgWw3rK3E1VFVoA0KcfUoj/L6ZQ3y16Q9MO6DGgcGlsd8VwU0GyRGtw1hXjMscVd7uF7U3K cHtxYpXuib8TmIW780her8kOzNnxgbpYRRPFMlaqTBSrEc drffSSGz v92gW8mSSXVBERrbOlFRQvBFVkYbOX4/YLtLiFkwZvD33nOgjwLNTQIb7EIou3sVKsNl3kYIEyOtdCEH8qQgRE/AAtYFeWd8taomAWLGSghkLIGw/1f2Es57Yact1AyIOeIuj4OqG6TeAUDv9wHuswUeIVR/5REXq9BINbg8pXof7XKgrQSsDY0G /LtVqOqznaxA==",
				"lang": "de",
				"oauthScopesRejected": "false",
				"output": "json",
				"password:SX:": "1846024",
				"pushTan": "Streichlisten Code",
				"redirect_uri": "",
				"screenSize": "1040",
				"submit": "1",
				"username": "1234567890",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("1a. STATUS "+i+": "+res[i].status);
            // console.log("1a. BODY "+i+": "+res[i].body); 
        };
		sleep(1.10);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/login",
			"body": {
				"_758_xprot": "/$xp2/hk4NqOLqFCK9jy_P8UhbO8V_4z7xJbkyli1CEE4vNZ5havD7l9bCIRxUrgeuUId8Kh!f4szIbhuIQmiIZuE67wGizNQU2UCYI0Ml45AT1glbh_RxknXxDuEuD!ZoVwGGe7sSJLKq0q3SjAC_jCTth03M8legjgII9aqaikaZqzImuPw8yOD82weYorWTOQIxQujC!K_DMfu9DA3ST93ysXcGdZ!CSlQUNA55gMqQtiGyr_1IL9511QbbgkwzH0xdOWH73dKIpmkt5MxUDDwWamgJqsxYiyBDxUvn_29nSfhcRDQBboG9eE63Tnfd5fxCwOhMjuKfeYei5iOU!jpVXtxPzgHjIxwP7yoO5YhKnAtTU3TJ029!Q3zmjhho0MrxIhb9ylU9x!F3bS977pJvY1VsYsNowFDsdNzaXuCt6TzZsq0AXoElhVfIVnTpjyOOQ2B1FFztMiLoBBPdFSlxgqn3U5B4XhGylmIU4HFVVUvRhUzlJSgkR9nc9QDv7SvSi1XDTUTvKW1ZkX_12eHK8euDshicqN9diCpGDIqt3xIsNCfs6wIpGWDfIugNRUicCXruvIOprGY0Os4iWKy2Taf1RJkoRyqgsxlv4MC_PsS5AdQUlVh8y5tYDl2JEqZkuw4pLWvMEAUyeiT6jZ_QWAi3uSPcXUMD1SvlDkNtGE81jteDSxlN15HHwalK44ztTaepEKTghaJcqUduvcehpcc6PDgmAehrs4kMPDXBRfpjHkiJ0mlCijX1nmi87seBIwMBxQIu5Hwo4N_T5idvDXkSmQBwLf5!c3b9Wb5ekuSG9ykjAvwJvCIdAHp9_ZVXah26Rwf0lwZMvl7hwBc7zDTv0hVtVRymY5Z4RKBFkYi86hARlCkeSuvrxb_jqF9tFQP64nhYN8R_t3xzAXq2xC8UlPoqvY8_dmZAVrqcA!QcDOswbysv!RQMA_gsS41I_G1iy8j8euAupxd!hkM_EWuzSrRyXyvrNt57z6XwfAAAEx9oDD2gyz5yz4AoOuBrLBwPcF9oP8TJSgeTwcauyrIYRiWRDWmrj9uBXtL7Tps5!LNFQBF31v9pmyIHEcmlaytdN0pLlInNwIyB_avCZ5oMCp8gvxSHPGH32wMWnNo3DzfLMsGelvs0kvRrtrbCbPdbuN0wBjFTKrubkTOeL84COEOMy4GZEPpIBdeV4V1jIwGGK5WP5C7DaH6GfWNmiZwGtaJkSOzOFocxR4p2yylWtCfMOFPZEDcsX0ALo!9m1k7uPxQHxtUefUWMRCtsgv83zr360AwXEyovZFcCwzIPl4s7FMPNqXvKX7h_XTiv!bXSZtM9YaqTQcgAupPYtNWJe0n1t00JotanuYb6na!RtiZjqkHDQQjTbXq7hkwPabrid!h31HO8cy1_xkdiNnF5q2s!7Qau0kfZAQUGsDlmzTA5T68YZVtja96sj97EQ_T0N9pzvRdJA4qzkJUCtL0CzZp4jfZu12vhTrFl8mtwi6_zP3Q8FPTWBVmDJjLiW5302Bx5d5Ul_TrK118rNJPSyOrXkdHSfhsCs4ndj6AYWrSrrpkPgn3EBAF3_CM2ireK3aF_6l2MKsil2n0cWEbodse0wFRFdeTDbRBPYD8PYu7DLZTspVZ9dBDEoqJpQZ5JBN_eDMQtgCO73pEJNmFwKf7izY7ZJxxDm3iM3lWzxO!SfIM7dsqcNcNTQnKNYDqZBvUStxH!j0Tm1nzcl93IBcIa6f6n4K7zbHoZ5eb97ozWTxcC21sTZiWOutOFc8!NDcr3EsQ2Uit2u5HxXdfDPOWfe9KuEqQ2lORGO8iI9U!7xyHpfj01km5ZXVCn_rSQ6Vpyq54FtsPxMOEf5_vrzuhS8x31c6ATrYwycxrkUKe1lVlUOkITwkmls!tL6psTU5ZGW!8eCpgrn8_DKxOZpzGoKWP4Ettu9Z0ELdOsCf8tL9RSs6J7d9GiEnpmOaCmS5RNBkjHlCQMWZ8qnDcQMLaP5i1hkWGqmuzia7LYfzdLPOoqs!X_F3VyGA0OHb5Jr5K4!VxX83eZuPzFDzYDg0y9z4utF!_ClzJdMNu6uYmqFbTk9Ryqoujw!w2G4Bh9bAY5wLJSzKJUKnMb7m61uN!IrkPYp!ERIzoztfeJnubRs5rSzVtlVouDgUMJyQZPY8_d6bSe!1YPJhB5UaQDxAWGTNGkNYaCNb8sCu96MyFG0Zbx6kLG!oT7TpthZ0AcU_cv9KWfqsfbDiAtcwTlWK15dZ5nCehQm7OXvzdgKcl5ennlz4nZad8uYqOWxuP9ypykGDLOtX0eL6VKeSsIAokokFd6hJgmwPtGiJqbm4dkUXYEEguQj99Da0DOa5E4raecbJFVeWvqCv2sej96y_2bpMm9HbSv17UL4PjOrdYc_6155j_2HPV8ixvnEozcET2cEQFqKu8QTJDNeOmi79m2IxO5ACM_Hs9rtB3CeZYmEOVr7uIZnlhGELh3tEwM!GbNbZFV7AOhL9CS!yol0HOZHC1a1DCRj2iyMYlFcJQDPJUuExckixgFa7t8YFn7_XJFVcGoAqihDYBANtHNrKGnfuUMZdOTgrHnatltq8WFCU4NWrNNuIWrRz0W!e89NejE3PJLmttrus7AhQ3ELihX1!!4dyRQ70auFdK!ZBNw1Pp!v0nt_aPhMIak4l049IvsetbQ2jCRvQMDpL93QekUV4nnuFFkktMi0YqoVd80TaC7eer_bNt0WMBWxkxkxabmn1!elxUQ!VV6BLj6jJ1C4Bmf4v0Ivw_KCqmaXvvtvGuHaOjsd6vyCu_hATi3DM_CaAfN_5CQKOYdHam8SvlR7VIidvfu1ldkv845FDRgkWDvAWVPsQW37OlkT5EWJC4tEgDeMREKMMLBa6oqtj8OEPiKP8yMJ4pEUnkFne1woiUuaHbJM9Ou_LG0m7MjjfeHu0B7nPQlpgTzZfkgBa1jhLEnNhaLZQUa!EiplaEV1CC35X!4FW5_YYOiJwUYAL4_Ga!IaNdKH8RrCMpljyHzKcgHfk7lPIOo1pJ5KQ9Off_1eQTttM!skH0iERbyti_DhLZiSxGMg6ahvWZNI7QAVoSnFB!6sxHmOMQAE7NW65LkpkDMbEW9aWEyhEHUjZLOhmJSdiKszyLFdxZeNeZ91aXVREsMiN38EeRWrJf9ScGKP9VaPBUjuJwSQfPd_1FMnCNseMX34JCc_UkgjrpoWtPhG4MM2QZ_F4WbZGjiL5X0RF!7_WXB0cPTplldMivEv2pAdFSTp6LS_qjs8wHveZ1A2UFVqfXwNFZf3txbA!Ldy5y5X7akTCwMAjpxxB9odKezK36nNfz63T9_VWtgHIW0pbnUtTd5gI!EQskvMzJ0sG97CfCfhxRf4K8E0yglTbO_L0ipbgqZrV8RG6GfdCbBNFs5A65cogSpHoodu8Gmx5EcCF7LR7xw8BXptusL6FL71ifwTTJQzSvO6Mjn3ClYNzE8gFYCsQwXqAMM16VSL7PQR!sCh9b7dhi5BE!GLMt6XVbwSGBOUZ6zx4_6CNNQgFpEgxKtj9YEz1kHcIb3JQTJpmG4TszKuD_b28s0jL9Q7qHJOQNz6anCiitZhg_kIu!xSR_HcyCAnnmrL8PX1mrNv5LRNbu8ZztRemQfCeTLANV71njCN2eMjpy5086Xw7TUpBbvzQ4W3jjz8VCEceJ2LxD!ruzS4MvXiwkb80Vkuk!4AsO0knmoosRi_FDT2Cu!uST7AfUibFyAWO6rUZOlBPBsqRN1QRRSAbVvaCSHvH7hNsOWBPArHsChyeBh7pzGayIHku8Uf4NBV6k1VBPPEG1uMcE0h5OvmBb!hbiJY1IT8hHmThbWSeVaEXHSLTZMRgc1FRuYxLaK57mD7lXag6Fx56fU6wOHq2Moe3M2FHVSlZchJXOu9CIo7hDzFV8qRYAq6MTFIGjm2o1ZANPCQMhlwMLyhVop1k7DrQImurb6J5e9L2RR8drZg7THIyc_fU_ehtQI57aRQnZfJrBglagj0V!FI2QbD19KKFmo07roaZj7DRSaE0yuie6c5ym5uvh2Yeq_JsyWO69_yP!W_KWIKpoaPvLNhSC6WKcUrPkacTbFC_MNDjM2LZADIHkfdACUQQZvvz3F6jwnNKcFvvwqFHo_AjV!zVgrJ5RlBWBaCyPxSLje4Fk7N1ZV8pOqSinuJNPRdsGpLYb9_Owv0IM6oVyuXjv5zhSWo_uMz8k!UeF_LKD0PeQjhFvf6GdgFa!0rB98M!geUc8_V51eqCyRgq2I5Asj_yCnVyHiHYkKwmg9J3VmImbu4bSQckS1xijrW35VcJvK4PonEdUEQwpebJ3pH957pzdgVXiCOGRj0Omgr0PM1m4M9k42T5vFcuMeWVy_SZPnpE57Dyw6!xuaO4wJXxdtgyDE8h6yAlM!ivqyN4J!Ns__HpqtNp4eB6TTWTE38HJzzjKUhNjyt4TbqgbIIAvfJ8KHQ!wPGLljjbzMefHgq0pm9y5IBzqWnrDJxIZMXtTSiToOGY1FiiiD7Lst0UI1trLNgK10ag6BCLj17SSS1CU3DPPbeeVGI_AvAEUQnEjJEIv8KPmSdE!PJQGKMayGGY5SDpgfJDB0_59lc7241zyREnWLiuDv6_3o6IlfCaDJvJyA4_KZCAA!VgAFl5GC4izMP4CTOhjo2uWODhTmdkAXO8YWFwWhtqJHq7wSTMt4RFOdv8hq95nmXEh4adgqMNzFAY0kSX6i4wA5ViI2xr_EOUvPMyZn6yqtyBb61ljnwR6zPDO!W5ymJeaTlEBQl4rYV_U8vPy_xUfxdsQ5PYFLwcqXcWVdqbq1vkSECOh0UaB8zlzsQUBAThGwPerd6J0c3gCdNQ1peIyNoZKPm9dq3WdOwaOjd_IIMTYv0Xczeo0qZgwNvwcjRU6mwkxKaau_muIWTsqY5XMZstsLHlH_hlW!OyfonKwbt6eiQcC1FT7sN2VfOJA3C9M1mE8FaVJBbVGGNuc9dy7iO77jv8MOY9DF7XUtCXZzEJKBCwYUQthTpBgytxlixwVFbMIDq2wiMEA7C1AZFio!upO2_ILfA1aWAQ7TwY8uGEd2JLhCx0Kpzv9ed8KLxtFMWz5HVAjoUf7_3u6zYL2tlYhqo1NvKMQQbX1jRaHIJdrflOUV7d6A_JfEu2U9CTgoi20iRdmCXVrC4fASO9HLmvNerfVgIjm0QmI1hcvgg3R96HzHwY6reBl0szdNeEH!ZCxiWycAMMeT0jiNapu2vYj9!deOjqhZvHf__TyrcfaWMW0nFq9gQjq_a8PXQRmy5W0gEwNi_HtrbrGCIuPuBK_q8GrRIMlpMoqFqTi6!vQi15qzhCS5o_RsIiG0!l2pQE1L1O9vA6HIzWAtW6SvxTPiZKk0w6EWJuXutHoE0qaNN39Ci6rkIug8zGgSyrKjoj5EKyfF3m7hLYimNe!X9w_khLYEeSmjPoGQ45QUrhpyp9Q8r1MyyWNp68wnoyLZywjTubIfQKjMgyIjjM2CWQDhzaCuuN1Vvko3N5KJztXiy3wkroLO2jQuTISp59peJbi!_cBG3wVdqRKEjRnHA1Xj4oic0NHr5vm3vyZRWgy_YG6qPngySM8xoHecajH3Uljkp9IxQXYDL8K2hHARZeJfdQuIGKVBOkZnSE3MzVMvrJoMYqy2hH1lvWcHTi!lfOJGjtCFmaHX1cuABpgt9pL3NTEETuHe4!Mq6NIm4Sb6vp13bxV!BPpURyts46bFzemSFIy4!rLNbHBD!H0iSLEL3zxb7sFQtTff_CJ5HyuOK13FNqcx_VjsXYggOKJCqgGh1lwrEkWxRpzGQgTvPt2KVgWam9OLiCqaew6p_KI9c6TMAH5vuxiCsOx6O67f57KuI6Chw1T8XTz9MPSkeHzRm53mvOpalMDKDhaz!dll8hylX0oThzVTPjilU5_Ef3wI1RSYT5KNPLPbRMqppGWHI5C99c1kVRZMJ3ak15EnS!QiOT2J1kJLylpmUEzVRccMr3GzZe2HYrF9iuQv1pqa1U!wArCcY9nUEIGQ3X_tMis=",
				"authCategory": "d",
				"bank": "soba",
				"dateOfBirth": "Geburtsdatum",
				"deviceName": "Gerätename",
				"encryptedPassword:SX:": "g3VCMhdQSKxL4DjfTBgWw3rK3E1VFVoA0KcfUoj/L6ZQ3y16Q9MO6DGgcGlsd8VwU0GyRGtw1hXjMscVd7uF7U3K cHtxYpXuib8TmIW780her8kOzNnxgbpYRRPFMlaqTBSrEc drffSSGz v92gW8mSSXVBERrbOlFRQvBFVkYbOX4/YLtLiFkwZvD33nOgjwLNTQIb7EIou3sVKsNl3kYIEyOtdCEH8qQgRE/AAtYFeWd8taomAWLGSghkLIGw/1f2Es57Yact1AyIOeIuj4OqG6TeAUDv9wHuswUeIVR/5REXq9BINbg8pXof7XKgrQSsDY0G /LtVqOqznaxA==",
				"lang": "de",
				"oauthScopesRejected": "false",
				"output": "json",
				"password:SX:": "1846024",
				"pushTan": "Streichlisten Code",
				"redirect_uri": "",
				"screenSize": "1040",
				"submit": "1",
				"username": "1234567890",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/login",
			"body": {
				"_758_xprot": "/$xp2/hk4NqOLqFCK9jy_P8UhbO8V_4z7xJbkyli1CEE4vNZ5havD7l9bCIRxUrgeuUId8Kh!f4szIbhuIQmiIZuE67wGizNQU2UCYI0Ml45AT1glbh_RxknXxDuEuD!ZoVwGGe7sSJLKq0q3SjAC_jCTth03M8legjgII9aqaikaZqzImuPw8yOD82weYorWTOQIxQujC!K_DMfu9DA3ST93ysXcGdZ!CSlQUNA55gMqQtiGyr_1IL9511QbbgkwzH0xdOWH73dKIpmkt5MxUDDwWamgJqsxYiyBDxUvn_29nSfhcRDQBboG9eE63Tnfd5fxCwOhMjuKfeYei5iOU!jpVXtxPzgHjIxwP7yoO5YhKnAtTU3TJ029!Q3zmjhho0MrxIhb9ylU9x!F3bS977pJvY1VsYsNowFDsdNzaXuCt6TzZsq0AXoElhVfIVnTpjyOOQ2B1FFztMiLoBBPdFSlxgqn3U5B4XhGylmIU4HFVVUvRhUzlJSgkR9nc9QDv7SvSi1XDTUTvKW1ZkX_12eHK8euDshicqN9diCpGDIqt3xIsNCfs6wIpGWDfIugNRUicCXruvIOprGY0Os4iWKy2Taf1RJkoRyqgsxlv4MC_PsS5AdQUlVh8y5tYDl2JEqZkuw4pLWvMEAUyeiT6jZ_QWAi3uSPcXUMD1SvlDkNtGE81jteDSxlN15HHwalK44ztTaepEKTghaJcqUduvcehpcc6PDgmAehrs4kMPDXBRfpjHkiJ0mlCijX1nmi87seBIwMBxQIu5Hwo4N_T5idvDXkSmQBwLf5!c3b9Wb5ekuSG9ykjAvwJvCIdAHp9_ZVXah26Rwf0lwZMvl7hwBc7zDTv0hVtVRymY5Z4RKBFkYi86hARlCkeSuvrxb_jqF9tFQP64nhYN8R_t3xzAXq2xC8UlPoqvY8_dmZAVrqcA!QcDOswbysv!RQMA_gsS41I_G1iy8j8euAupxd!hkM_EWuzSrRyXyvrNt57z6XwfAAAEx9oDD2gyz5yz4AoOuBrLBwPcF9oP8TJSgeTwcauyrIYRiWRDWmrj9uBXtL7Tps5!LNFQBF31v9pmyIHEcmlaytdN0pLlInNwIyB_avCZ5oMCp8gvxSHPGH32wMWnNo3DzfLMsGelvs0kvRrtrbCbPdbuN0wBjFTKrubkTOeL84COEOMy4GZEPpIBdeV4V1jIwGGK5WP5C7DaH6GfWNmiZwGtaJkSOzOFocxR4p2yylWtCfMOFPZEDcsX0ALo!9m1k7uPxQHxtUefUWMRCtsgv83zr360AwXEyovZFcCwzIPl4s7FMPNqXvKX7h_XTiv!bXSZtM9YaqTQcgAupPYtNWJe0n1t00JotanuYb6na!RtiZjqkHDQQjTbXq7hkwPabrid!h31HO8cy1_xkdiNnF5q2s!7Qau0kfZAQUGsDlmzTA5T68YZVtja96sj97EQ_T0N9pzvRdJA4qzkJUCtL0CzZp4jfZu12vhTrFl8mtwi6_zP3Q8FPTWBVmDJjLiW5302Bx5d5Ul_TrK118rNJPSyOrXkdHSfhsCs4ndj6AYWrSrrpkPgn3EBAF3_CM2ireK3aF_6l2MKsil2n0cWEbodse0wFRFdeTDbRBPYD8PYu7DLZTspVZ9dBDEoqJpQZ5JBN_eDMQtgCO73pEJNmFwKf7izY7ZJxxDm3iM3lWzxO!SfIM7dsqcNcNTQnKNYDqZBvUStxH!j0Tm1nzcl93IBcIa6f6n4K7zbHoZ5eb97ozWTxcC21sTZiWOutOFc8!NDcr3EsQ2Uit2u5HxXdfDPOWfe9KuEqQ2lORGO8iI9U!7xyHpfj01km5ZXVCn_rSQ6Vpyq54FtsPxMOEf5_vrzuhS8x31c6ATrYwycxrkUKe1lVlUOkITwkmls!tL6psTU5ZGW!8eCpgrn8_DKxOZpzGoKWP4Ettu9Z0ELdOsCf8tL9RSs6J7d9GiEnpmOaCmS5RNBkjHlCQMWZ8qnDcQMLaP5i1hkWGqmuzia7LYfzdLPOoqs!X_F3VyGA0OHb5Jr5K4!VxX83eZuPzFDzYDg0y9z4utF!_ClzJdMNu6uYmqFbTk9Ryqoujw!w2G4Bh9bAY5wLJSzKJUKnMb7m61uN!IrkPYp!ERIzoztfeJnubRs5rSzVtlVouDgUMJyQZPY8_d6bSe!1YPJhB5UaQDxAWGTNGkNYaCNb8sCu96MyFG0Zbx6kLG!oT7TpthZ0AcU_cv9KWfqsfbDiAtcwTlWK15dZ5nCehQm7OXvzdgKcl5ennlz4nZad8uYqOWxuP9ypykGDLOtX0eL6VKeSsIAokokFd6hJgmwPtGiJqbm4dkUXYEEguQj99Da0DOa5E4raecbJFVeWvqCv2sej96y_2bpMm9HbSv17UL4PjOrdYc_6155j_2HPV8ixvnEozcET2cEQFqKu8QTJDNeOmi79m2IxO5ACM_Hs9rtB3CeZYmEOVr7uIZnlhGELh3tEwM!GbNbZFV7AOhL9CS!yol0HOZHC1a1DCRj2iyMYlFcJQDPJUuExckixgFa7t8YFn7_XJFVcGoAqihDYBANtHNrKGnfuUMZdOTgrHnatltq8WFCU4NWrNNuIWrRz0W!e89NejE3PJLmttrus7AhQ3ELihX1!!4dyRQ70auFdK!ZBNw1Pp!v0nt_aPhMIak4l049IvsetbQ2jCRvQMDpL93QekUV4nnuFFkktMi0YqoVd80TaC7eer_bNt0WMBWxkxkxabmn1!elxUQ!VV6BLj6jJ1C4Bmf4v0Ivw_KCqmaXvvtvGuHaOjsd6vyCu_hATi3DM_CaAfN_5CQKOYdHam8SvlR7VIidvfu1ldkv845FDRgkWDvAWVPsQW37OlkT5EWJC4tEgDeMREKMMLBa6oqtj8OEPiKP8yMJ4pEUnkFne1woiUuaHbJM9Ou_LG0m7MjjfeHu0B7nPQlpgTzZfkgBa1jhLEnNhaLZQUa!EiplaEV1CC35X!4FW5_YYOiJwUYAL4_Ga!IaNdKH8RrCMpljyHzKcgHfk7lPIOo1pJ5KQ9Off_1eQTttM!skH0iERbyti_DhLZiSxGMg6ahvWZNI7QAVoSnFB!6sxHmOMQAE7NW65LkpkDMbEW9aWEyhEHUjZLOhmJSdiKszyLFdxZeNeZ91aXVREsMiN38EeRWrJf9ScGKP9VaPBUjuJwSQfPd_1FMnCNseMX34JCc_UkgjrpoWtPhG4MM2QZ_F4WbZGjiL5X0RF!7_WXB0cPTplldMivEv2pAdFSTp6LS_qjs8wHveZ1A2UFVqfXwNFZf3txbA!Ldy5y5X7akTCwMAjpxxB9odKezK36nNfz63T9_VWtgHIW0pbnUtTd5gI!EQskvMzJ0sG97CfCfhxRf4K8E0yglTbO_L0ipbgqZrV8RG6GfdCbBNFs5A65cogSpHoodu8Gmx5EcCF7LR7xw8BXptusL6FL71ifwTTJQzSvO6Mjn3ClYNzE8gFYCsQwXqAMM16VSL7PQR!sCh9b7dhi5BE!GLMt6XVbwSGBOUZ6zx4_6CNNQgFpEgxKtj9YEz1kHcIb3JQTJpmG4TszKuD_b28s0jL9Q7qHJOQNz6anCiitZhg_kIu!xSR_HcyCAnnmrL8PX1mrNv5LRNbu8ZztRemQfCeTLANV71njCN2eMjpy5086Xw7TUpBbvzQ4W3jjz8VCEceJ2LxD!ruzS4MvXiwkb80Vkuk!4AsO0knmoosRi_FDT2Cu!uST7AfUibFyAWO6rUZOlBPBsqRN1QRRSAbVvaCSHvH7hNsOWBPArHsChyeBh7pzGayIHku8Uf4NBV6k1VBPPEG1uMcE0h5OvmBb!hbiJY1IT8hHmThbWSeVaEXHSLTZMRgc1FRuYxLaK57mD7lXag6Fx56fU6wOHq2Moe3M2FHVSlZchJXOu9CIo7hDzFV8qRYAq6MTFIGjm2o1ZANPCQMhlwMLyhVop1k7DrQImurb6J5e9L2RR8drZg7THIyc_fU_ehtQI57aRQnZfJrBglagj0V!FI2QbD19KKFmo07roaZj7DRSaE0yuie6c5ym5uvh2Yeq_JsyWO69_yP!W_KWIKpoaPvLNhSC6WKcUrPkacTbFC_MNDjM2LZADIHkfdACUQQZvvz3F6jwnNKcFvvwqFHo_AjV!zVgrJ5RlBWBaCyPxSLje4Fk7N1ZV8pOqSinuJNPRdsGpLYb9_Owv0IM6oVyuXjv5zhSWo_uMz8k!UeF_LKD0PeQjhFvf6GdgFa!0rB98M!geUc8_V51eqCyRgq2I5Asj_yCnVyHiHYkKwmg9J3VmImbu4bSQckS1xijrW35VcJvK4PonEdUEQwpebJ3pH957pzdgVXiCOGRj0Omgr0PM1m4M9k42T5vFcuMeWVy_SZPnpE57Dyw6!xuaO4wJXxdtgyDE8h6yAlM!ivqyN4J!Ns__HpqtNp4eB6TTWTE38HJzzjKUhNjyt4TbqgbIIAvfJ8KHQ!wPGLljjbzMefHgq0pm9y5IBzqWnrDJxIZMXtTSiToOGY1FiiiD7Lst0UI1trLNgK10ag6BCLj17SSS1CU3DPPbeeVGI_AvAEUQnEjJEIv8KPmSdE!PJQGKMayGGY5SDpgfJDB0_59lc7241zyREnWLiuDv6_3o6IlfCaDJvJyA4_KZCAA!VgAFl5GC4izMP4CTOhjo2uWODhTmdkAXO8YWFwWhtqJHq7wSTMt4RFOdv8hq95nmXEh4adgqMNzFAY0kSX6i4wA5ViI2xr_EOUvPMyZn6yqtyBb61ljnwR6zPDO!W5ymJeaTlEBQl4rYV_U8vPy_xUfxdsQ5PYFLwcqXcWVdqbq1vkSECOh0UaB8zlzsQUBAThGwPerd6J0c3gCdNQ1peIyNoZKPm9dq3WdOwaOjd_IIMTYv0Xczeo0qZgwNvwcjRU6mwkxKaau_muIWTsqY5XMZstsLHlH_hlW!OyfonKwbt6eiQcC1FT7sN2VfOJA3C9M1mE8FaVJBbVGGNuc9dy7iO77jv8MOY9DF7XUtCXZzEJKBCwYUQthTpBgytxlixwVFbMIDq2wiMEA7C1AZFio!upO2_ILfA1aWAQ7TwY8uGEd2JLhCx0Kpzv9ed8KLxtFMWz5HVAjoUf7_3u6zYL2tlYhqo1NvKMQQbX1jRaHIJdrflOUV7d6A_JfEu2U9CTgoi20iRdmCXVrC4fASO9HLmvNerfVgIjm0QmI1hcvgg3R96HzHwY6reBl0szdNeEH!ZCxiWycAMMeT0jiNapu2vYj9!deOjqhZvHf__TyrcfaWMW0nFq9gQjq_a8PXQRmy5W0gEwNi_HtrbrGCIuPuBK_q8GrRIMlpMoqFqTi6!vQi15qzhCS5o_RsIiG0!l2pQE1L1O9vA6HIzWAtW6SvxTPiZKk0w6EWJuXutHoE0qaNN39Ci6rkIug8zGgSyrKjoj5EKyfF3m7hLYimNe!X9w_khLYEeSmjPoGQ45QUrhpyp9Q8r1MyyWNp68wnoyLZywjTubIfQKjMgyIjjM2CWQDhzaCuuN1Vvko3N5KJztXiy3wkroLO2jQuTISp59peJbi!_cBG3wVdqRKEjRnHA1Xj4oic0NHr5vm3vyZRWgy_YG6qPngySM8xoHecajH3Uljkp9IxQXYDL8K2hHARZeJfdQuIGKVBOkZnSE3MzVMvrJoMYqy2hH1lvWcHTi!lfOJGjtCFmaHX1cuABpgt9pL3NTEETuHe4!Mq6NIm4Sb6vp13bxV!BPpURyts46bFzemSFIy4!rLNbHBD!H0iSLEL3zxb7sFQtTff_CJ5HyuOK13FNqcx_VjsXYggOKJCqgGh1lwrEkWxRpzGQgTvPt2KVgWam9OLiCqaew6p_KI9c6TMAH5vuxiCsOx6O67f57KuI6Chw1T8XTz9MPSkeHzRm53mvOpalMDKDhaz!dll8hylX0oThzVTPjilU5_Ef3wI1RSYT5KNPLPbRMqppGWHI5C99c1kVRZMJ3ak15EnS!QiOT2J1kJLylpmUEzVRccMr3GzZe2HYrF9iuQv1pqa1U!wArCcY9nUEIGQ3X_tMis=",
				"authCategory": "d",
				"bank": "soba",
				"dateOfBirth": "Geburtsdatum",
				"deviceName": "Gerätename",
				"encryptedPassword:SX:": "g3VCMhdQSKxL4DjfTBgWw3rK3E1VFVoA0KcfUoj/L6ZQ3y16Q9MO6DGgcGlsd8VwU0GyRGtw1hXjMscVd7uF7U3K cHtxYpXuib8TmIW780her8kOzNnxgbpYRRPFMlaqTBSrEc drffSSGz v92gW8mSSXVBERrbOlFRQvBFVkYbOX4/YLtLiFkwZvD33nOgjwLNTQIb7EIou3sVKsNl3kYIEyOtdCEH8qQgRE/AAtYFeWd8taomAWLGSghkLIGw/1f2Es57Yact1AyIOeIuj4OqG6TeAUDv9wHuswUeIVR/5REXq9BINbg8pXof7XKgrQSsDY0G /LtVqOqznaxA==",
				"lang": "de",
				"oauthScopesRejected": "false",
				"output": "json",
				"password:SX:": "1846024",
				"pushTan": "Streichlisten Code",
				"redirect_uri": "",
				"screenSize": "1040",
				"submit": "1",
				"username": "1234567890",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("1b. STATUS "+i+": "+res[i].status);
            // console.log("1b. BODY "+i+": "+res[i].body); 
        };
		sleep(1.34);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/login",
			"body": {
				"_758_xprot": "/$xp2/hk4NqOLqFCK9jy_P8UhbO8V_4z7xJbkyli1CEE4vNZ5havD7l9bCIRxUrgeuUId8Kh!f4szIbhuIQmiIZuE67wGizNQU2UCYI0Ml45AT1glbh_RxknXxDuEuD!ZoVwGGe7sSJLKq0q3SjAC_jCTth03M8legjgII9aqaikaZqzImuPw8yOD82weYorWTOQIxQujC!K_DMfu9DA3ST93ysXcGdZ!CSlQUNA55gMqQtiGyr_1IL9511QbbgkwzH0xdOWH73dKIpmkt5MxUDDwWamgJqsxYiyBDxUvn_29nSfhcRDQBboG9eE63Tnfd5fxCwOhMjuKfeYei5iOU!jpVXtxPzgHjIxwP7yoO5YhKnAtTU3TJ029!Q3zmjhho0MrxIhb9ylU9x!F3bS977pJvY1VsYsNowFDsdNzaXuCt6TzZsq0AXoElhVfIVnTpjyOOQ2B1FFztMiLoBBPdFSlxgqn3U5B4XhGylmIU4HFVVUvRhUzlJSgkR9nc9QDv7SvSi1XDTUTvKW1ZkX_12eHK8euDshicqN9diCpGDIqt3xIsNCfs6wIpGWDfIugNRUicCXruvIOprGY0Os4iWKy2Taf1RJkoRyqgsxlv4MC_PsS5AdQUlVh8y5tYDl2JEqZkuw4pLWvMEAUyeiT6jZ_QWAi3uSPcXUMD1SvlDkNtGE81jteDSxlN15HHwalK44ztTaepEKTghaJcqUduvcehpcc6PDgmAehrs4kMPDXBRfpjHkiJ0mlCijX1nmi87seBIwMBxQIu5Hwo4N_T5idvDXkSmQBwLf5!c3b9Wb5ekuSG9ykjAvwJvCIdAHp9_ZVXah26Rwf0lwZMvl7hwBc7zDTv0hVtVRymY5Z4RKBFkYi86hARlCkeSuvrxb_jqF9tFQP64nhYN8R_t3xzAXq2xC8UlPoqvY8_dmZAVrqcA!QcDOswbysv!RQMA_gsS41I_G1iy8j8euAupxd!hkM_EWuzSrRyXyvrNt57z6XwfAAAEx9oDD2gyz5yz4AoOuBrLBwPcF9oP8TJSgeTwcauyrIYRiWRDWmrj9uBXtL7Tps5!LNFQBF31v9pmyIHEcmlaytdN0pLlInNwIyB_avCZ5oMCp8gvxSHPGH32wMWnNo3DzfLMsGelvs0kvRrtrbCbPdbuN0wBjFTKrubkTOeL84COEOMy4GZEPpIBdeV4V1jIwGGK5WP5C7DaH6GfWNmiZwGtaJkSOzOFocxR4p2yylWtCfMOFPZEDcsX0ALo!9m1k7uPxQHxtUefUWMRCtsgv83zr360AwXEyovZFcCwzIPl4s7FMPNqXvKX7h_XTiv!bXSZtM9YaqTQcgAupPYtNWJe0n1t00JotanuYb6na!RtiZjqkHDQQjTbXq7hkwPabrid!h31HO8cy1_xkdiNnF5q2s!7Qau0kfZAQUGsDlmzTA5T68YZVtja96sj97EQ_T0N9pzvRdJA4qzkJUCtL0CzZp4jfZu12vhTrFl8mtwi6_zP3Q8FPTWBVmDJjLiW5302Bx5d5Ul_TrK118rNJPSyOrXkdHSfhsCs4ndj6AYWrSrrpkPgn3EBAF3_CM2ireK3aF_6l2MKsil2n0cWEbodse0wFRFdeTDbRBPYD8PYu7DLZTspVZ9dBDEoqJpQZ5JBN_eDMQtgCO73pEJNmFwKf7izY7ZJxxDm3iM3lWzxO!SfIM7dsqcNcNTQnKNYDqZBvUStxH!j0Tm1nzcl93IBcIa6f6n4K7zbHoZ5eb97ozWTxcC21sTZiWOutOFc8!NDcr3EsQ2Uit2u5HxXdfDPOWfe9KuEqQ2lORGO8iI9U!7xyHpfj01km5ZXVCn_rSQ6Vpyq54FtsPxMOEf5_vrzuhS8x31c6ATrYwycxrkUKe1lVlUOkITwkmls!tL6psTU5ZGW!8eCpgrn8_DKxOZpzGoKWP4Ettu9Z0ELdOsCf8tL9RSs6J7d9GiEnpmOaCmS5RNBkjHlCQMWZ8qnDcQMLaP5i1hkWGqmuzia7LYfzdLPOoqs!X_F3VyGA0OHb5Jr5K4!VxX83eZuPzFDzYDg0y9z4utF!_ClzJdMNu6uYmqFbTk9Ryqoujw!w2G4Bh9bAY5wLJSzKJUKnMb7m61uN!IrkPYp!ERIzoztfeJnubRs5rSzVtlVouDgUMJyQZPY8_d6bSe!1YPJhB5UaQDxAWGTNGkNYaCNb8sCu96MyFG0Zbx6kLG!oT7TpthZ0AcU_cv9KWfqsfbDiAtcwTlWK15dZ5nCehQm7OXvzdgKcl5ennlz4nZad8uYqOWxuP9ypykGDLOtX0eL6VKeSsIAokokFd6hJgmwPtGiJqbm4dkUXYEEguQj99Da0DOa5E4raecbJFVeWvqCv2sej96y_2bpMm9HbSv17UL4PjOrdYc_6155j_2HPV8ixvnEozcET2cEQFqKu8QTJDNeOmi79m2IxO5ACM_Hs9rtB3CeZYmEOVr7uIZnlhGELh3tEwM!GbNbZFV7AOhL9CS!yol0HOZHC1a1DCRj2iyMYlFcJQDPJUuExckixgFa7t8YFn7_XJFVcGoAqihDYBANtHNrKGnfuUMZdOTgrHnatltq8WFCU4NWrNNuIWrRz0W!e89NejE3PJLmttrus7AhQ3ELihX1!!4dyRQ70auFdK!ZBNw1Pp!v0nt_aPhMIak4l049IvsetbQ2jCRvQMDpL93QekUV4nnuFFkktMi0YqoVd80TaC7eer_bNt0WMBWxkxkxabmn1!elxUQ!VV6BLj6jJ1C4Bmf4v0Ivw_KCqmaXvvtvGuHaOjsd6vyCu_hATi3DM_CaAfN_5CQKOYdHam8SvlR7VIidvfu1ldkv845FDRgkWDvAWVPsQW37OlkT5EWJC4tEgDeMREKMMLBa6oqtj8OEPiKP8yMJ4pEUnkFne1woiUuaHbJM9Ou_LG0m7MjjfeHu0B7nPQlpgTzZfkgBa1jhLEnNhaLZQUa!EiplaEV1CC35X!4FW5_YYOiJwUYAL4_Ga!IaNdKH8RrCMpljyHzKcgHfk7lPIOo1pJ5KQ9Off_1eQTttM!skH0iERbyti_DhLZiSxGMg6ahvWZNI7QAVoSnFB!6sxHmOMQAE7NW65LkpkDMbEW9aWEyhEHUjZLOhmJSdiKszyLFdxZeNeZ91aXVREsMiN38EeRWrJf9ScGKP9VaPBUjuJwSQfPd_1FMnCNseMX34JCc_UkgjrpoWtPhG4MM2QZ_F4WbZGjiL5X0RF!7_WXB0cPTplldMivEv2pAdFSTp6LS_qjs8wHveZ1A2UFVqfXwNFZf3txbA!Ldy5y5X7akTCwMAjpxxB9odKezK36nNfz63T9_VWtgHIW0pbnUtTd5gI!EQskvMzJ0sG97CfCfhxRf4K8E0yglTbO_L0ipbgqZrV8RG6GfdCbBNFs5A65cogSpHoodu8Gmx5EcCF7LR7xw8BXptusL6FL71ifwTTJQzSvO6Mjn3ClYNzE8gFYCsQwXqAMM16VSL7PQR!sCh9b7dhi5BE!GLMt6XVbwSGBOUZ6zx4_6CNNQgFpEgxKtj9YEz1kHcIb3JQTJpmG4TszKuD_b28s0jL9Q7qHJOQNz6anCiitZhg_kIu!xSR_HcyCAnnmrL8PX1mrNv5LRNbu8ZztRemQfCeTLANV71njCN2eMjpy5086Xw7TUpBbvzQ4W3jjz8VCEceJ2LxD!ruzS4MvXiwkb80Vkuk!4AsO0knmoosRi_FDT2Cu!uST7AfUibFyAWO6rUZOlBPBsqRN1QRRSAbVvaCSHvH7hNsOWBPArHsChyeBh7pzGayIHku8Uf4NBV6k1VBPPEG1uMcE0h5OvmBb!hbiJY1IT8hHmThbWSeVaEXHSLTZMRgc1FRuYxLaK57mD7lXag6Fx56fU6wOHq2Moe3M2FHVSlZchJXOu9CIo7hDzFV8qRYAq6MTFIGjm2o1ZANPCQMhlwMLyhVop1k7DrQImurb6J5e9L2RR8drZg7THIyc_fU_ehtQI57aRQnZfJrBglagj0V!FI2QbD19KKFmo07roaZj7DRSaE0yuie6c5ym5uvh2Yeq_JsyWO69_yP!W_KWIKpoaPvLNhSC6WKcUrPkacTbFC_MNDjM2LZADIHkfdACUQQZvvz3F6jwnNKcFvvwqFHo_AjV!zVgrJ5RlBWBaCyPxSLje4Fk7N1ZV8pOqSinuJNPRdsGpLYb9_Owv0IM6oVyuXjv5zhSWo_uMz8k!UeF_LKD0PeQjhFvf6GdgFa!0rB98M!geUc8_V51eqCyRgq2I5Asj_yCnVyHiHYkKwmg9J3VmImbu4bSQckS1xijrW35VcJvK4PonEdUEQwpebJ3pH957pzdgVXiCOGRj0Omgr0PM1m4M9k42T5vFcuMeWVy_SZPnpE57Dyw6!xuaO4wJXxdtgyDE8h6yAlM!ivqyN4J!Ns__HpqtNp4eB6TTWTE38HJzzjKUhNjyt4TbqgbIIAvfJ8KHQ!wPGLljjbzMefHgq0pm9y5IBzqWnrDJxIZMXtTSiToOGY1FiiiD7Lst0UI1trLNgK10ag6BCLj17SSS1CU3DPPbeeVGI_AvAEUQnEjJEIv8KPmSdE!PJQGKMayGGY5SDpgfJDB0_59lc7241zyREnWLiuDv6_3o6IlfCaDJvJyA4_KZCAA!VgAFl5GC4izMP4CTOhjo2uWODhTmdkAXO8YWFwWhtqJHq7wSTMt4RFOdv8hq95nmXEh4adgqMNzFAY0kSX6i4wA5ViI2xr_EOUvPMyZn6yqtyBb61ljnwR6zPDO!W5ymJeaTlEBQl4rYV_U8vPy_xUfxdsQ5PYFLwcqXcWVdqbq1vkSECOh0UaB8zlzsQUBAThGwPerd6J0c3gCdNQ1peIyNoZKPm9dq3WdOwaOjd_IIMTYv0Xczeo0qZgwNvwcjRU6mwkxKaau_muIWTsqY5XMZstsLHlH_hlW!OyfonKwbt6eiQcC1FT7sN2VfOJA3C9M1mE8FaVJBbVGGNuc9dy7iO77jv8MOY9DF7XUtCXZzEJKBCwYUQthTpBgytxlixwVFbMIDq2wiMEA7C1AZFio!upO2_ILfA1aWAQ7TwY8uGEd2JLhCx0Kpzv9ed8KLxtFMWz5HVAjoUf7_3u6zYL2tlYhqo1NvKMQQbX1jRaHIJdrflOUV7d6A_JfEu2U9CTgoi20iRdmCXVrC4fASO9HLmvNerfVgIjm0QmI1hcvgg3R96HzHwY6reBl0szdNeEH!ZCxiWycAMMeT0jiNapu2vYj9!deOjqhZvHf__TyrcfaWMW0nFq9gQjq_a8PXQRmy5W0gEwNi_HtrbrGCIuPuBK_q8GrRIMlpMoqFqTi6!vQi15qzhCS5o_RsIiG0!l2pQE1L1O9vA6HIzWAtW6SvxTPiZKk0w6EWJuXutHoE0qaNN39Ci6rkIug8zGgSyrKjoj5EKyfF3m7hLYimNe!X9w_khLYEeSmjPoGQ45QUrhpyp9Q8r1MyyWNp68wnoyLZywjTubIfQKjMgyIjjM2CWQDhzaCuuN1Vvko3N5KJztXiy3wkroLO2jQuTISp59peJbi!_cBG3wVdqRKEjRnHA1Xj4oic0NHr5vm3vyZRWgy_YG6qPngySM8xoHecajH3Uljkp9IxQXYDL8K2hHARZeJfdQuIGKVBOkZnSE3MzVMvrJoMYqy2hH1lvWcHTi!lfOJGjtCFmaHX1cuABpgt9pL3NTEETuHe4!Mq6NIm4Sb6vp13bxV!BPpURyts46bFzemSFIy4!rLNbHBD!H0iSLEL3zxb7sFQtTff_CJ5HyuOK13FNqcx_VjsXYggOKJCqgGh1lwrEkWxRpzGQgTvPt2KVgWam9OLiCqaew6p_KI9c6TMAH5vuxiCsOx6O67f57KuI6Chw1T8XTz9MPSkeHzRm53mvOpalMDKDhaz!dll8hylX0oThzVTPjilU5_Ef3wI1RSYT5KNPLPbRMqppGWHI5C99c1kVRZMJ3ak15EnS!QiOT2J1kJLylpmUEzVRccMr3GzZe2HYrF9iuQv1pqa1U!wArCcY9nUEIGQ3X_tMis=",
				"authCategory": "d",
				"bank": "soba",
				"lang": "de",
				"oauthScopesRejected": "false",
				"output": "html",
				"redirectLinksOnly": "true",
				"submit": "1",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "text/html, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("1c. STATUS "+i+": "+res[i].status);
            // console.log("1c. BODY "+i+": "+res[i].body); 
        };
		sleep(6.21);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/login",
			"body": {
				"_758_xprot": "/$xp2/hk4NqOLqFCK9jy_P8UhbO8V_4z7xJbkyli1CEE4vNZ5havD7l9bCIRxUrgeuUId8Kh!f4szIbhuIQmiIZuE67wGizNQU2UCYI0Ml45AT1glbh_RxknXxDuEuD!ZoVwGGe7sSJLKq0q3SjAC_jCTth03M8legjgII9aqaikaZqzImuPw8yOD82weYorWTOQIxQujC!K_DMfu9DA3ST93ysXcGdZ!CSlQUNA55gMqQtiGyr_1IL9511QbbgkwzH0xdOWH73dKIpmkt5MxUDDwWamgJqsxYiyBDxUvn_29nSfhcRDQBboG9eE63Tnfd5fxCwOhMjuKfeYei5iOU!jpVXtxPzgHjIxwP7yoO5YhKnAtTU3TJ029!Q3zmjhho0MrxIhb9ylU9x!F3bS977pJvY1VsYsNowFDsdNzaXuCt6TzZsq0AXoElhVfIVnTpjyOOQ2B1FFztMiLoBBPdFSlxgqn3U5B4XhGylmIU4HFVVUvRhUzlJSgkR9nc9QDv7SvSi1XDTUTvKW1ZkX_12eHK8euDshicqN9diCpGDIqt3xIsNCfs6wIpGWDfIugNRUicCXruvIOprGY0Os4iWKy2Taf1RJkoRyqgsxlv4MC_PsS5AdQUlVh8y5tYDl2JEqZkuw4pLWvMEAUyeiT6jZ_QWAi3uSPcXUMD1SvlDkNtGE81jteDSxlN15HHwalK44ztTaepEKTghaJcqUduvcehpcc6PDgmAehrs4kMPDXBRfpjHkiJ0mlCijX1nmi87seBIwMBxQIu5Hwo4N_T5idvDXkSmQBwLf5!c3b9Wb5ekuSG9ykjAvwJvCIdAHp9_ZVXah26Rwf0lwZMvl7hwBc7zDTv0hVtVRymY5Z4RKBFkYi86hARlCkeSuvrxb_jqF9tFQP64nhYN8R_t3xzAXq2xC8UlPoqvY8_dmZAVrqcA!QcDOswbysv!RQMA_gsS41I_G1iy8j8euAupxd!hkM_EWuzSrRyXyvrNt57z6XwfAAAEx9oDD2gyz5yz4AoOuBrLBwPcF9oP8TJSgeTwcauyrIYRiWRDWmrj9uBXtL7Tps5!LNFQBF31v9pmyIHEcmlaytdN0pLlInNwIyB_avCZ5oMCp8gvxSHPGH32wMWnNo3DzfLMsGelvs0kvRrtrbCbPdbuN0wBjFTKrubkTOeL84COEOMy4GZEPpIBdeV4V1jIwGGK5WP5C7DaH6GfWNmiZwGtaJkSOzOFocxR4p2yylWtCfMOFPZEDcsX0ALo!9m1k7uPxQHxtUefUWMRCtsgv83zr360AwXEyovZFcCwzIPl4s7FMPNqXvKX7h_XTiv!bXSZtM9YaqTQcgAupPYtNWJe0n1t00JotanuYb6na!RtiZjqkHDQQjTbXq7hkwPabrid!h31HO8cy1_xkdiNnF5q2s!7Qau0kfZAQUGsDlmzTA5T68YZVtja96sj97EQ_T0N9pzvRdJA4qzkJUCtL0CzZp4jfZu12vhTrFl8mtwi6_zP3Q8FPTWBVmDJjLiW5302Bx5d5Ul_TrK118rNJPSyOrXkdHSfhsCs4ndj6AYWrSrrpkPgn3EBAF3_CM2ireK3aF_6l2MKsil2n0cWEbodse0wFRFdeTDbRBPYD8PYu7DLZTspVZ9dBDEoqJpQZ5JBN_eDMQtgCO73pEJNmFwKf7izY7ZJxxDm3iM3lWzxO!SfIM7dsqcNcNTQnKNYDqZBvUStxH!j0Tm1nzcl93IBcIa6f6n4K7zbHoZ5eb97ozWTxcC21sTZiWOutOFc8!NDcr3EsQ2Uit2u5HxXdfDPOWfe9KuEqQ2lORGO8iI9U!7xyHpfj01km5ZXVCn_rSQ6Vpyq54FtsPxMOEf5_vrzuhS8x31c6ATrYwycxrkUKe1lVlUOkITwkmls!tL6psTU5ZGW!8eCpgrn8_DKxOZpzGoKWP4Ettu9Z0ELdOsCf8tL9RSs6J7d9GiEnpmOaCmS5RNBkjHlCQMWZ8qnDcQMLaP5i1hkWGqmuzia7LYfzdLPOoqs!X_F3VyGA0OHb5Jr5K4!VxX83eZuPzFDzYDg0y9z4utF!_ClzJdMNu6uYmqFbTk9Ryqoujw!w2G4Bh9bAY5wLJSzKJUKnMb7m61uN!IrkPYp!ERIzoztfeJnubRs5rSzVtlVouDgUMJyQZPY8_d6bSe!1YPJhB5UaQDxAWGTNGkNYaCNb8sCu96MyFG0Zbx6kLG!oT7TpthZ0AcU_cv9KWfqsfbDiAtcwTlWK15dZ5nCehQm7OXvzdgKcl5ennlz4nZad8uYqOWxuP9ypykGDLOtX0eL6VKeSsIAokokFd6hJgmwPtGiJqbm4dkUXYEEguQj99Da0DOa5E4raecbJFVeWvqCv2sej96y_2bpMm9HbSv17UL4PjOrdYc_6155j_2HPV8ixvnEozcET2cEQFqKu8QTJDNeOmi79m2IxO5ACM_Hs9rtB3CeZYmEOVr7uIZnlhGELh3tEwM!GbNbZFV7AOhL9CS!yol0HOZHC1a1DCRj2iyMYlFcJQDPJUuExckixgFa7t8YFn7_XJFVcGoAqihDYBANtHNrKGnfuUMZdOTgrHnatltq8WFCU4NWrNNuIWrRz0W!e89NejE3PJLmttrus7AhQ3ELihX1!!4dyRQ70auFdK!ZBNw1Pp!v0nt_aPhMIak4l049IvsetbQ2jCRvQMDpL93QekUV4nnuFFkktMi0YqoVd80TaC7eer_bNt0WMBWxkxkxabmn1!elxUQ!VV6BLj6jJ1C4Bmf4v0Ivw_KCqmaXvvtvGuHaOjsd6vyCu_hATi3DM_CaAfN_5CQKOYdHam8SvlR7VIidvfu1ldkv845FDRgkWDvAWVPsQW37OlkT5EWJC4tEgDeMREKMMLBa6oqtj8OEPiKP8yMJ4pEUnkFne1woiUuaHbJM9Ou_LG0m7MjjfeHu0B7nPQlpgTzZfkgBa1jhLEnNhaLZQUa!EiplaEV1CC35X!4FW5_YYOiJwUYAL4_Ga!IaNdKH8RrCMpljyHzKcgHfk7lPIOo1pJ5KQ9Off_1eQTttM!skH0iERbyti_DhLZiSxGMg6ahvWZNI7QAVoSnFB!6sxHmOMQAE7NW65LkpkDMbEW9aWEyhEHUjZLOhmJSdiKszyLFdxZeNeZ91aXVREsMiN38EeRWrJf9ScGKP9VaPBUjuJwSQfPd_1FMnCNseMX34JCc_UkgjrpoWtPhG4MM2QZ_F4WbZGjiL5X0RF!7_WXB0cPTplldMivEv2pAdFSTp6LS_qjs8wHveZ1A2UFVqfXwNFZf3txbA!Ldy5y5X7akTCwMAjpxxB9odKezK36nNfz63T9_VWtgHIW0pbnUtTd5gI!EQskvMzJ0sG97CfCfhxRf4K8E0yglTbO_L0ipbgqZrV8RG6GfdCbBNFs5A65cogSpHoodu8Gmx5EcCF7LR7xw8BXptusL6FL71ifwTTJQzSvO6Mjn3ClYNzE8gFYCsQwXqAMM16VSL7PQR!sCh9b7dhi5BE!GLMt6XVbwSGBOUZ6zx4_6CNNQgFpEgxKtj9YEz1kHcIb3JQTJpmG4TszKuD_b28s0jL9Q7qHJOQNz6anCiitZhg_kIu!xSR_HcyCAnnmrL8PX1mrNv5LRNbu8ZztRemQfCeTLANV71njCN2eMjpy5086Xw7TUpBbvzQ4W3jjz8VCEceJ2LxD!ruzS4MvXiwkb80Vkuk!4AsO0knmoosRi_FDT2Cu!uST7AfUibFyAWO6rUZOlBPBsqRN1QRRSAbVvaCSHvH7hNsOWBPArHsChyeBh7pzGayIHku8Uf4NBV6k1VBPPEG1uMcE0h5OvmBb!hbiJY1IT8hHmThbWSeVaEXHSLTZMRgc1FRuYxLaK57mD7lXag6Fx56fU6wOHq2Moe3M2FHVSlZchJXOu9CIo7hDzFV8qRYAq6MTFIGjm2o1ZANPCQMhlwMLyhVop1k7DrQImurb6J5e9L2RR8drZg7THIyc_fU_ehtQI57aRQnZfJrBglagj0V!FI2QbD19KKFmo07roaZj7DRSaE0yuie6c5ym5uvh2Yeq_JsyWO69_yP!W_KWIKpoaPvLNhSC6WKcUrPkacTbFC_MNDjM2LZADIHkfdACUQQZvvz3F6jwnNKcFvvwqFHo_AjV!zVgrJ5RlBWBaCyPxSLje4Fk7N1ZV8pOqSinuJNPRdsGpLYb9_Owv0IM6oVyuXjv5zhSWo_uMz8k!UeF_LKD0PeQjhFvf6GdgFa!0rB98M!geUc8_V51eqCyRgq2I5Asj_yCnVyHiHYkKwmg9J3VmImbu4bSQckS1xijrW35VcJvK4PonEdUEQwpebJ3pH957pzdgVXiCOGRj0Omgr0PM1m4M9k42T5vFcuMeWVy_SZPnpE57Dyw6!xuaO4wJXxdtgyDE8h6yAlM!ivqyN4J!Ns__HpqtNp4eB6TTWTE38HJzzjKUhNjyt4TbqgbIIAvfJ8KHQ!wPGLljjbzMefHgq0pm9y5IBzqWnrDJxIZMXtTSiToOGY1FiiiD7Lst0UI1trLNgK10ag6BCLj17SSS1CU3DPPbeeVGI_AvAEUQnEjJEIv8KPmSdE!PJQGKMayGGY5SDpgfJDB0_59lc7241zyREnWLiuDv6_3o6IlfCaDJvJyA4_KZCAA!VgAFl5GC4izMP4CTOhjo2uWODhTmdkAXO8YWFwWhtqJHq7wSTMt4RFOdv8hq95nmXEh4adgqMNzFAY0kSX6i4wA5ViI2xr_EOUvPMyZn6yqtyBb61ljnwR6zPDO!W5ymJeaTlEBQl4rYV_U8vPy_xUfxdsQ5PYFLwcqXcWVdqbq1vkSECOh0UaB8zlzsQUBAThGwPerd6J0c3gCdNQ1peIyNoZKPm9dq3WdOwaOjd_IIMTYv0Xczeo0qZgwNvwcjRU6mwkxKaau_muIWTsqY5XMZstsLHlH_hlW!OyfonKwbt6eiQcC1FT7sN2VfOJA3C9M1mE8FaVJBbVGGNuc9dy7iO77jv8MOY9DF7XUtCXZzEJKBCwYUQthTpBgytxlixwVFbMIDq2wiMEA7C1AZFio!upO2_ILfA1aWAQ7TwY8uGEd2JLhCx0Kpzv9ed8KLxtFMWz5HVAjoUf7_3u6zYL2tlYhqo1NvKMQQbX1jRaHIJdrflOUV7d6A_JfEu2U9CTgoi20iRdmCXVrC4fASO9HLmvNerfVgIjm0QmI1hcvgg3R96HzHwY6reBl0szdNeEH!ZCxiWycAMMeT0jiNapu2vYj9!deOjqhZvHf__TyrcfaWMW0nFq9gQjq_a8PXQRmy5W0gEwNi_HtrbrGCIuPuBK_q8GrRIMlpMoqFqTi6!vQi15qzhCS5o_RsIiG0!l2pQE1L1O9vA6HIzWAtW6SvxTPiZKk0w6EWJuXutHoE0qaNN39Ci6rkIug8zGgSyrKjoj5EKyfF3m7hLYimNe!X9w_khLYEeSmjPoGQ45QUrhpyp9Q8r1MyyWNp68wnoyLZywjTubIfQKjMgyIjjM2CWQDhzaCuuN1Vvko3N5KJztXiy3wkroLO2jQuTISp59peJbi!_cBG3wVdqRKEjRnHA1Xj4oic0NHr5vm3vyZRWgy_YG6qPngySM8xoHecajH3Uljkp9IxQXYDL8K2hHARZeJfdQuIGKVBOkZnSE3MzVMvrJoMYqy2hH1lvWcHTi!lfOJGjtCFmaHX1cuABpgt9pL3NTEETuHe4!Mq6NIm4Sb6vp13bxV!BPpURyts46bFzemSFIy4!rLNbHBD!H0iSLEL3zxb7sFQtTff_CJ5HyuOK13FNqcx_VjsXYggOKJCqgGh1lwrEkWxRpzGQgTvPt2KVgWam9OLiCqaew6p_KI9c6TMAH5vuxiCsOx6O67f57KuI6Chw1T8XTz9MPSkeHzRm53mvOpalMDKDhaz!dll8hylX0oThzVTPjilU5_Ef3wI1RSYT5KNPLPbRMqppGWHI5C99c1kVRZMJ3ak15EnS!QiOT2J1kJLylpmUEzVRccMr3GzZe2HYrF9iuQv1pqa1U!wArCcY9nUEIGQ3X_tMis=",
				"authCategory": "d",
				"bank": "soba",
				"lang": "de",
				"login": "1",
				"oauthScopesRejected": "false",
				"output": "json",
				"redirect_uri": "",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/staticcontent/html/1988163737/img/soba/App_Store_Badge_DE.svg",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/staticcontent/html/1988163737/img/soba/Google_Play_Badge_DE.png",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/staticcontent/html/1988163737/img/soba/MAP_E-Banking_Tile.png",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("1d. STATUS "+i+": "+res[i].status);
            // console.log("1d. BODY "+i+": "+res[i].body); 
        };
		sleep(0.36);
	});
	group("page_1 - https://soba-r200-test.dbh.crealogix.com/ebankingLogin/$xp2/RqTLwIZGUCfUeTZs!HfzqQvVj8X0n4DqiHCg11Z!EbI8YRttCypoL_0uJOkPrajZkbp48A==$/p/p/p/p/p/p", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingLogin/$xp2/RqTLwIZGUCfUeTZs!HfzqQvVj8X0n4DqiHCg11Z!EbI8YRttCypoL_0uJOkPrajZkbp48A==$/p/p/p/p/p/p",
			"params": {
				"headers": {
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "document",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("2a. STATUS "+i+": "+res[i].status);
            // console.log("2a. BODY "+i+": "+res[i].body); 
        };
		sleep(6.28);
		req = [{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/desktop.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/desktopModules/dashboard.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/components.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/workInProgress.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/img/soba/clx_pointer_upBaloise.svg",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("2b. STATUS "+i+": "+res[i].status);
            // console.log("2b. BODY "+i+": "+res[i].body); 
        };
		sleep(0.54);
		req = [{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/morph.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/morph.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/pic_logo.png",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/cito.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.hammer.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.ellipsis.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.floatThead.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/highcharts.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/highcharts-more.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/exporting.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/b.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/e.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/map-core-login.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/api/webapp.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/lib/dashboardApp.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/MetaPro-Normal.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/morph.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/MetaPro-Normal.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/morph.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("2c. STATUS "+i+": "+res[i].status);
            // console.log("2c. BODY "+i+": "+res[i].body); 
        };
		sleep(1.19);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/DE6LGcSimbN3k58BiP6DAVOSHG0olBNh34gnxp6bBeH4kMlI4!Pf!FdgI6JGpaLRONqIyxu4RaWjH98OUMLrhS0KF0s=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/wBEZcf62oBsk4c_qfFOBpdJH_vvrYas6epOMLYdSXzjfqw7k3UOtcEmsHqiy6pCy_pRFhLcy9hR35uTDMZte2RcRfgcfe6o9o9WnCAfnkqYZ8fu6ukSTO2xgwTcqhr701wy51w==",
				"service": "userPreferences",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/snl4bUIeeNvaB_N0OrbTkAHyM_peHFFxx4AmZFubnkxuoQMFcaB3!B33fx04xfqF9jxYZ4G5nBmSPp151JZW4j_Z4VM=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/wDMZcuJfBHBHoqocETZWlkl7nkcVfSIaDqwkLJsj!XGTtWw!lY0u58X2p41miwPR0!wOTuusFnBmVvTk21UGsSixcDQqbTEM!Z8D3XoZn!qYJYWkvqwick8g1XKul_ZMhesCrJQ5rQmoBRUEC6vMTLWiRpmPPX3aG80FIXD9rZZnvA6Oy2BjJh0YCP_!FG0BsJcX5p1eO4iMjIcz26kbfF!NN33RUJh3_XKBTlpkaYodSfgFDj2XQdTGfFhWpCXSGqZjnlngNoSlZRCuMbU5RjusQGDCQfGqwE2nisnJeFHq8sXE5OANpiQxb!3im6rD!VKslySt0qxp03AQfzKpxu2p095QMlydwahUcIsjd63plRwhANplHUWrHcKVnb2Hw9r0DQdXzpc0xCq2Gm91JzEIJLvdNqqrNSDkrbCZt4_!y4vmekGbV!ClCSSQ2vRsIWjj8rBpxjE5tLKjyg!bzXlG21lCOz9qFjGMicrWkGX6k6MGDtp_Bst4GdHlSzIOEDJACIAF0!APeGA7AQu9eAmS6EaVlJhjQDPrlRS0FtO4dqI1domIvfYBr0OEYCd4HMTCLg==",
				"first": "1",
				"init": "1",
				"service": "getWidgets",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/snl4bUIeeNvaB_N0OrbTkAHyM_peHFFxx4AmZFubnkxuoQMFcaB3!B33fx04xfqF9jxYZ4G5nBmSPp151JZW4j_Z4VM=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/wDMZcuJfBHBHoqocETZWlkl7nkcVfSIaDqwkLJsj!XGTtWw!lY0u58X2p41miwPR0!wOTuusFnBmVvTk21UGsSixcDQqbTEM!Z8D3XoZn!qYJYWkvqwick8g1XKul_ZMhesCrJQ5rQmoBRUEC6vMTLWiRpmPPX3aG80FIXD9rZZnvA6Oy2BjJh0YCP_!FG0BsJcX5p1eO4iMjIcz26kbfF!NN33RUJh3_XKBTlpkaYodSfgFDj2XQdTGfFhWpCXSGqZjnlngNoSlZRCuMbU5RjusQGDCQfGqwE2nisnJeFHq8sXE5OANpiQxb!3im6rD!VKslySt0qxp03AQfzKpxu2p095QMlydwahUcIsjd63plRwhANplHUWrHcKVnb2Hw9r0DQdXzpc0xCq2Gm91JzEIJLvdNqqrNSDkrbCZt4_!y4vmekGbV!ClCSSQ2vRsIWjj8rBpxjE5tLKjyg!bzXlG21lCOz9qFjGMicrWkGX6k6MGDtp_Bst4GdHlSzIOEDJACIAF0!APeGA7AQu9eAmS6EaVlJhjQDPrlRS0FtO4dqI1domIvfYBr0OEYCd4HMTCLg==",
				"first": "1",
				"init": "1",
				"service": "getContractWidgets",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/snl4bUIeeNvaB_N0OrbTkAHyM_peHFFxx4AmZFubnkxuoQMFcaB3!B33fx04xfqF9jxYZ4G5nBmSPp151JZW4j_Z4VM=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/wDMZcuJfBHBHoqocETZWlkl7nkcVfSIaDqwkLJsj!XGTtWw!lY0u58X2p41miwPR0!wOTuusFnBmVvTk21UGsSixcDQqbTEM!Z8D3XoZn!qYJYWkvqwick8g1XKul_ZMhesCrJQ5rQmoBRUEC6vMTLWiRpmPPX3aG80FIXD9rZZnvA6Oy2BjJh0YCP_!FG0BsJcX5p1eO4iMjIcz26kbfF!NN33RUJh3_XKBTlpkaYodSfgFDj2XQdTGfFhWpCXSGqZjnlngNoSlZRCuMbU5RjusQGDCQfGqwE2nisnJeFHq8sXE5OANpiQxb!3im6rD!VKslySt0qxp03AQfzKpxu2p095QMlydwahUcIsjd63plRwhANplHUWrHcKVnb2Hw9r0DQdXzpc0xCq2Gm91JzEIJLvdNqqrNSDkrbCZt4_!y4vmekGbV!ClCSSQ2vRsIWjj8rBpxjE5tLKjyg!bzXlG21lCOz9qFjGMicrWkGX6k6MGDtp_Bst4GdHlSzIOEDJACIAF0!APeGA7AQu9eAmS6EaVlJhjQDPrlRS0FtO4dqI1domIvfYBr0OEYCd4HMTCLg==",
				"first": "1",
				"init": "1",
				"service": "initPage",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/N!yiMxkbl6UJzN249VU8Nie5F1ryKhusscOVgYcSxA6mIpDS4_UNeO931Vw0meMX6MyV!5Nww4QFrdRyyiIMXOBi_EE=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/hZj2UYSHqrcNdVqei3NmUjcW9yqUMHX9BGnIBTDFCnVzgxPLgLXHzoJNN9jimygUSMPBFCz!0Dap5Z!qF2GiESwMuF0ENF77MV1jwBuWSGz876YaQaC0TJyO!sj1SYIgtzSyIM7fX7N2vb60rkvr9yO1J0508opebguIt41LoO_8iFpboUn5KKM1Fv3weqw9B14Pwh7m97PEWn3YlqETs3TWPNnZ!awUxyxu!DENP98b9lvDKlb2Aa9LsBXAFLm9yjTsOT4aEhhE6Pgk0Smy7WHvn4RQ9SbdwZjXhiexE3AXeoFiYewUQHy!F5A9_if0HaogX72bWGDrjPYRF1Gx20c4BA7UhsVCpWt7YcKzdPcRrOMtrvMf0zSIy9Mp7fgr6s3rXubVGYEl5wUVUKH652RTzpZHBd2a8uaDmu9hVvekm8pqM8Y18!vyBxdfDeZlbiNxI8rolawPjd_EGnN75v225CCGRZqoZRbkvKKCcRDuTMY5V6Jj8Dco7bXHeXtDOx_!JJhfZnP3!m6StOGa3WByYRYJJcf2kPT3oqebrsJujrOFXbqid_3HyfWpvh0sSNnHfXX2FIH3CzQrwdjcI8IrL1Dh3kLtRYJP1ZQRCTYecGjLSzkMGbZpi1IxcVkUnLBmUfKGt2pg2J7KLrP3dkVfCATB!sD5sLripn0ot4x09kFThhyoNq!EFkhXdwv8R!VHm_L8JNyDjfTK9T3!USpxwAtEiIs4TtGaYnee9gkELXhvGD80IFMdfR0p9hWTX4VydWUlkCUkZKZs8F3kT4U2Hd!axDhB_6yoO_Dqkwas1vGJ",
				"service": "favouritesOverview",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("2d. STATUS "+i+": "+res[i].status);
            // console.log("2d. BODY "+i+": "+res[i].body); 
        };
		sleep(1.19);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/f8ItXP5s3HSiOZVLy!sLs3Ao12l1aKomuQ5TzoXk0NOsp3jWRUUSRJFA8llvMFvF8oHISA==$/p/p/p/p/p/p",
			"body": "counters=0~PAYMENTS_TO_VERIFY&counters=1~PAYMENTS_TO_SIGN&counters=2~OPEN_E_BILLS&counters=3~UNREAD_MESSAGES_INBOX&counters=4~UNREAD_DOCUMENTS_INBOX&counters=5~DECISIONS_TO_TAKE&counters=6~PENDING_TRADING_ORDERS&counters=7~REJECTED_TRADING_ORDERS&service=getCounters&window=1584542590428&_758_xprot=/$xp2/GF9V92kHV15bVjroba8q5DBtUqO7oeo4Cc4ywRpIsKDtWXGEIXeSpWOqCsya1q7wNnQwTr5_0fkIqUJMmMbBj!TWvtXsSHIpZ6iNFT4DQcBsiKrhuvNzHZEKR5OHNEYKZgi0Oc8VJLTWdLV!9SfsGZED4rbWbyRQRSjre5zRAc3GZlMq",
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/loading_attachment_action.gif",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/0Hm4Q99Qx8WOQeBjXr1n3oMU8bUF33m3H3FZUjdwEs8XWLa2HHnnA!bk1vCyPTrgCrxZFsC7S8t1To0ulhZGOu5Z7WE=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/RP33stGe0Kf8vSAz634pQvF1I!Wx4sadrt2cOuyuMPdVsbrlfke1pOq7hfdA7yLEqsp6T6wNufo3qBacJ_s2yF3LXlSWQ0yGe1HFMsLRtSNpxA6!N78Xa1DSqtSoHQXnl8WDPH2Au!GXRu1XKRhHqDUxJn0bR5P0rHL_a5bKe2ZbGAiNoUOMl0Sw7rm30Dsg9bRWNfB8GrOjqXc8BQOsEJQPFlNLLNmzQQGno30bGia11G1KCDLIDDcGWaVl9ZV9yY9mnGVxu6rnrPh9p8QoH8_rNVghQU0d3lUnDjEpOhRYpl_ZZP5XqWEJ3nnTIKzH7lPSzX8bzFZJTWW0GljsSoKfCuaMy_LgQ2Ma1Wx_ox3FD08lECfjK60TYsWYeB13y4VUK1HLDZmrxeyG5e1LqS4VhM5ulfrfCvah2z5YJxfT8MMamyZJZaA7CFsiJ962pJunvi4SejQDaVuqBO8qWQe2ZpjdF!8g8Gm5Csd2DoTp0JRAIJXuiCjFS4r8Jwl7Zq2LiTWfkVfhlyM!10dYTYaavb88r9NXExdHvcn48gDiVLTsXRGBRNyBImv1RsgA0rqebZ_wAKYKIEjHAFqQz2tSmSyKs7OeErbehNz4qeOqUsP2QMXP7JZGfr05!!89ZbkQrM0dtgQ1u8dXhgRvPQvgx84PEHJezt7UMM48wUWeygH6p0o6fBMbo5dz0_WbS08OzsugOBCBgbJNIG7mUIiUvWpw6217ttPGGZw1o_xnYayKLYzu!df17EBSq6F7k2_vt7UJ5UWNcOMhAr5F!EvfibFFiqmReRGR6bHS7Mr0OeqCKCLUa5sunZiyHT9yLIqR0mqDgTUz9pq!XpFog4VTmnkZMp!1AtO07rp1oRSfBYAEAgI9qQCD8vDfsoFWPMxqCASdosqNlvQDV7z7iOIJb8INPQE!nrCGZZrUN4GskYnknHAY2SiC6C8M_yL0fPoLk8P34HLemuhXktsBwhpXtuetK3DcEcyWcH3VrwLIKf1mhVTh2AoeYb3WQWjy5o3nyT!nNtEMcvFyF26p4BlvWaSIPIEFpkD5QZU5GRHQ7aoyALSK0Uo2elIhVqR6UGTgiAhX6KY!cCjbhuTa0uqsjyJR4BHGNvYjKXJfXfUZ6LkNjYZjWajuSAnF7rRV0W1jfd7DMAhu628W0SA_jinZ12QXfslBHTtY2cVsZOUUrkjY!l6IXgoTLMucgR!0f_s81zotLNVJDUyJHxJj3DM_jvYjBch3OIElCneZYnpkf59BiDOganvG8aTD7L8gshLrQn5KwGOHgFHxmYL0_Q3OE!d78bIA8!AjqaLwMtr09b_Q6WKRG0fDNVef8Q_RncGtadzRW5GF0aJZymY6nM9AtyqQzxsTg2ny6BTSscyKPyOt2DTu5Mf_cV1nr7zhA9My3j0jdLdxiqkDjUInt0QMgek8XEf9yErsBrqypNahbCq1UENU_zKLVXQk3H3P087kIb02iD6ZXbcMMWXFUNTxMZtYsRl1l9y_78RB7QmQN_hhlgrEEC1h3ZM8ABJpB1x8muwasc!kouVUjDLh4BJAz9FhaPCnBE8ryMyPf!!jjeZkv!MYHZLYkpQ_1uQNzxygydxd20sozpXV6H!i6Ve4LSq83UjCDGq2HlKnJhcY4hnRI0_ZcjX9tIrM4o5K2g4jqC2!PqTct!etRfNvJOBhx373SzP!DGRfn8sGWfuP6X65Q64HHnSIGRwdOlNTZ3AtrIOhCVtWtwJlR4na7UX491VrCCiTosanoCngoM0NWbDu2XiZpQneutq9pHZtPbzFnQW7unHIM_4qM8c1!G736Nc7Sy8jcyJbFvcare3eniJqD_Jeu5XRMELitxKtkRB9!spnadBXuLB0_bIelft5bRrA9U1PdDj_3KVRWzYaS0TEYlHZOerJXAGaZt2Rx2RShrFDFIljBR64NvgMTF78wpPbXSW5qSfzpMzfuhjpEKxPqz9tiArzCeso8N7LDs7RIjlWd088YHgf0hG08aj5EplVkL6A_XrjZEqF4YLjorwnOjZf7dZBzSdQS3Y3dtYmzbJ0C7q8cIxnPlv1I0MemQ9NFhOFCx802FDYUWYFz3Ag3fvQAR7l3Mx6Px62MdQhgQvVh8cbnUzslSNiJ8sik_NELFh869MZxaQCyr2h1ehIqDrs9fX_1x5HkY5CqCmPNPAHLJU8yzDtpP7HqI17l!VUfam5AZH5ierm0gsh!z4blqEnoAPB7fGFiTLxcfteBlm6UeBDCAkx_ZeRI_wOjsdiinAiM0cfCo9wbtizs4sVTVjB4r3aC8vNoONnhcyX0649Dwf3eyhJthLOHy9fPbFTB!2uMwxW6bo8MSQjJ7hKKxBW4j5_uB94kuHf!KGKQVVSEGwSuiplPI3VozRQ8CtpgeyAewV1sWad6Xaz4VfmduEBIENfhCzd1p_kAjGgTGjHPN4q8iQb6lDTXobMcb2bb_or4aHhb_IhC1lRQbPN",
				"isWithBalance": "false",
				"service": "accountOverview",
				"token": "D6MZLFc3U4W7",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/dKCpB1t3P5hU1rJh7_gZwOZ9AXxJ12SWVE4lEwq!E1V5uDdAISpchdoQhTFwu41HlXPH8q5CkbRWN!cNx3PLpPVOa4Q=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/SNy47wKl0gDtRYR48xPEejBlesCNgVKgve_Lx3UCGB58ql5htOwITvYoVqHov9o09Mv1NdqlupXvv9MmcYScuPO_l!gegX8Gejs7jYhaUq5o6JuBUTDJXODEAlqY94Al5ejtW7eLikbpUM6JMvUP1kzEk5h5aN7IvulnXmsKojI6CBWhs1P8Pq0JWKIjUQsgyDJS5zUo157uMtqzxSW8GYWmLXNZP1qVF!_PibVsIc8wg0SLjoXhikG4iAaaluf7QEZWkXa4BPtYHHlKukvNSc46sr8So0D!hBsjk40pwdh2tiCEeB8c1cWL!8IWjGya86MbXWkiI8YWoFymuDIiDEtfYWavAxDP_VVYajRA6nm5kzrujj910P1rP5AyZjC9S5!XdjL64arrcavBhLaKjXf1phvCyoSJSDXh_sNm39tEAzIsBWOhzsGMTe7zK14CgvwCBo0E7kE0JVc7D07!OBssy6gdDe!GvAuB3eYmkjm5B9u71uRoteL5xm96BQM!uOYsfpahvq4dpuKIKjz23vPQ_gJnoGDI6nZlU7jcY92ptImUIBSE5x7jksZ!J_TZlh6D8dAXt3DATVB1l_pTfYLV4OBqqUn8VkBefSdoMvdOBVLE_gY7A4JFXnzg_l3hGjDYjXeRwDbJWt9QGo2wqZJ0PbFpCQdr1kztsYRmKlquWwp0tyBp!urdP6szT3tfwXokq348dNwtShnYTdVHF2mQc6Hupa3La_QLkPc24XNC1hL1Jqj3f6hYtzS3k!5NfJvVJDz_Pxi9qEZytl6LYJaW9JvpiDSsMmV09jPzIwbFusBiU4nC8BImEv6nniTM0HxmEb9SsYuoT13yJ2lI_wGmp5d1SFNQ3bFkYoxo!gwfhuKxA7fT8VjSeC4j5okwrImAPJYF4MCtyIqMNsUAt_42Kz8IugPXYqqWXzFNWIqwRtz3tDW!JZZbBAAEcy!K0qtPJifOjukske2KI0Ecd0ZluyalSpzoagrkUeYe!qJ6jbVqfstgey9hwbKGDrtExezZQ0NW3MmcqtkFIwZ7abc7qd5jZsSu2TUZkejrugfXqpKXcivxAzVvzf8ve5Poby9pDgau_PMLF0KCEFLogMHzuD9SMyiKQEkSz1GcXyTftJs6z70M9GNFThGZae!V2Mw7vMQrzyY0bAGOXLSJA5YU_oviuS1DewanGrsxw_8tlcFiW_l!Ux0tVzQZoNSxCeixPogrisYtDgPsLEapNp5nOeY2aQQ5W2kIWkEQto1a0fWASI!Q2L7gvNCpWPzWasMcodnWmI8uosisKCTr3U09EJ!m9zzuDPesUTWF7kqSzHggYW018eaWYG5fbtB6NGXhUJpC_NVeB_1obclbSnqa_oyyXNXJxD_sfYUaq81DqEjRTaInDoujq4PsBU2JkYD33turNsTl2oeVRBo2qUGQYKREVNnJVaPPYjLdOTDC!qmix8Lf8G_r5FgqYjnjq4V3BZybrxNSiO25qnyu697nnknSzx8XSS_NHDGuem4xsc969xRTpbJqFiNqR6pFYlMJoYH8PV!3q7wivhYEaNXakgLYyxF!370OYsVJCtXJlLIY2t7HEGn5yEXbKEIj1NG16uBPO9xDFgFBQ9TcY!n!mbODFJNmNIo5OvaBg4coGAg!IOCAJCVg5B92ODb4UKRWTsVXk3leuCh3ODpdQgiZbmKl4PQqb!9cCFmwcFO!E9d_vUge!acvxG756AdUn22xgQ4ojQGdGMqPaEov37z99Lkzzy7jA9J4Ryn_Rx00RxQRNk1Ib8QMYPPHL3SaFc7JCKpiDM7TljXcYNhS1fTyFi2tsldQL70mZI2makNyw6ItURlo2YyvFPjZkLKEJIBC1eIqZpw9zURiRxC310ErhTPlPmO7Ku_FRpS8Eb31CiKS1B_Rluf3eYFWUGP_SQ6XsdHwd3_aoDqx4zKTa29MmB6FMurhDTR5BoSCStYAJckIwgG26ZEjt6SjVX6wW94uLv52hxVDEzXPFB_WQKke_u535!uqlwmua24sEuuwhbVnxeAXiOHB20invyRcETCTWNObH0nV0UFj3mxO1JOFnIFgXQ!HxpwUyADxss2kEtK2SKdN13fJDfA_LG9dVL_zk6MZTfcHzKmRQ_hvYYMdv2f48vjTeE20uSpD2PkEMLZk0N04hEN60XLI4Gc6vDN!XmdbtN4JEZRqO2ZROmCev5gam0GvM5GCz3tNiitmfiuuMLvO1YenULORBUdRKOrCrgfEgy_xEvi2egWaNXJ8vj_hAmXVtkeTZJA4aQVVfOVGhvHTLuWuWdLczNWieUxXsSjMqoQEBLuauxhhCYAF_k8jdfOnOgMQEy4qadUXjMBlxuykT!voNcbR0RTNrMHzsSnqSqoQW3Nf9Az5G0yQ69Zg3JGrG0RTGUQBz42_HXDpUua_llkiK6mudNrr82bVpnIzEEm2lxhe9fkUNwwC44mx8nYwfWo9C3LFgpNvfY5QgfupkqwkQWmhE6zSh1NzHuxwtU1i0xor7KElO6XRBMiut2sIeIHFk_jFpoJml98pLQ!Brf1k3dXNZ4eb3h4VqYs1fhOXJahhJ7dHwCF4rw5_k79qglF6FshvopljsXtwtGrVVbYzT89sA9h0D0GF83laDDwoLQDxABbN4uAGwbdVQEFPxwbyDZ7nidgSouB4Te!Zm0HSZ99a4X3qGvYcUNNwHnoCd9HaymB5IS2IJ3cFCvR8BRaScNaJM1hBNMtz8G!E5yVCVtglcGtD0VbWQnszFKb4PnL3BWnSybkMZ0I05G41t91oWuZCidAFEPqhoeEczzQ0TAJRL3u6y!yFUlHRcRDJG7jTY5m9sKs!l81QJrQ85PxWIlIwv9nHh5KplkTehCZzrCvz68JHQ!5KuN4RqfQmVXY!mJF!jziGHwF15Bc!OV5pIZS9!nJXj4XXp2FztNhTR_D65NNOAtMSN3YS7loCHdXC1dR5j7KWJa3ERGaazn6JHiIjvs396aMrKQEVhVEW6vHSFEPZCdiHGrnX9NSTiXTzPKfWWhqgjHqKbHVsN7YMIR_kLO2gfw5oFUOfYbt!w7p_2zju2f85nZQydhLsyg4cSRVnhDTwT4IE5h2qFGSyiCD5DTFRlfRK_IcXCh1zQDdm7T4K8KdCO27S7N5KnwKCmICdybutjZ_J2dg6_YQMsoMb13!vVa1vwRYV3aWBukfT2ZD8kZVU_KnI7K_m!GerYub1CvFDOxSqPzC5RIyDA7MMm1d8BunvGOMUbom4y9K5dCISW47BdP1eJryWTBiO!xnCEHrohhvp9piQKbjlHCz6yuqjaTBRHHoL!7WgiRuPfvbZyyH93PHhe4MNj5YPO3rDmeIxxzhbGzyUQMeazK_tARt6zo_lU5gblUMmE1WbV5PMo95e6bQFmEPXL0cTs9owyZccdsDKr_86NCkE8PVpGLgOsxMfsOau2d0hwXLvlXHlsUjaF6!6sVgZyncYsLlNcVOFaVuqa12_5I3Sg4WvAVs2tWPKEWQNiyXGmH1_1SMgjfC1NiZA8R_FdVW0qsUeev!kqzK63_m3uDxYmYQ9zD!09CgPI3Sikj277ZEz!LftALq8GpHsBmGwJMdKDIzJAN7wBcsJu5BJtVcqdzgjL0YSL9MHCpnXq8i2qOC5DABVYc17bm73r9k8mCs5K!FjmBZo5VXSsgJx8C4lluJ5_ZqqU8nGxMCY!hURqlWREPKjGjLm8zEa4eQhypaC1sDWR8Lc5sHdzav3vL6zuLlg6osRONgsBaVLWH1tRZehRhurti9isqz9s4qcWIiWr8bk!fAKOZZ2K6jb9!n5F029AVHmJbr537sdA_!V2GwUDkmv3ORnp453nu543pEqbkqSO_6pESO2isi1ul8zgS09DiJbJuHSWcRdSSCFbgr4TS5jVZoo29jVN006HKezOxZ1SqoH9W29UDV3gHabdVUTgILBZbX6rVaesuLk1Dhvu2af7QOpFWPoc24OVEsLtPwm02vNqYTUABKs7CpVDJ7YkOBi0_KArOGR59s3zVX8Jc66lGtid4WqyzSpo6JlNm_qMmf7cOfYbogcaePjyTqOkKSukX9MotRBYkeQjgg8kPtEOHCaYIzon6So5LBAW1!hpYtg_5!RaffpAQiv7RxDt86qMOf_y1PJFsM97jv9UZtzBkPv1usJ4Ybeuv4YD9h_YuNSJ5dJPWmAb!nWYum_ibDJOM0jOujjZa62Lz_cUsIid7XyCsI3dYoxDScT0lmVouXpTXSvb78R966d3JKTvZmk_29r_h8jMyi4g_GxfkyqOu2C!7Ctj2jL29GY0PxrWDhWFs1o4Kx!Ud2EP6O4V82fj_cz82htipDLa9A4lLYwjsYXHKc6b0lp9UgsCjM!SSbnWe_glqnOrJOolyp3RPxPI!nFvGQtETsb6zJgHblTB0aEmau52NVhC1GZ16h8sTyMuq_Y7hScigC5RAfFjRPIhZ7eBH4FWzIgPHSumyCuGHG!4EQtheHCfWXx4r_CcZzayCqFRaS2Oklq2id25j73yiAw0qpg9f7Wr2X5ieOt5FPKKr!3TS1BJbRwBHt07KNLK5x!njINyxOiSKtQHkyuyAZHa7Sq_WTBOKMyoA5j8Xsxy15w3slsxw3VwwPkx7_hdJTKuHNKbHGr1AhQH9f1!ElKHSvhy!9XAyzl2UQwV6Qebw47houhzt2gcAKgvFBXHDt28!2HyCTPq00FwjZiPbZLQbg8qS4NQGBCROSLBuPQjA==",
				"isWithBalance": "false",
				"loadCustodyAccounts": "false",
				"service": "portfolioOverview",
				"showOnlySecurities": "false",
				"token": "D6MZLFc3U4W7",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/NEnse1GdtU3U96fSB7DmVSMO9JZchOKeFPTQACDL_BDIzuRM63UFPz7qIg4zc6Zs9SomTDfdJtl!y!wNT!XL7DbbdRU=$/p/p/p/p/p/p",
			"body": "showScanned=false&showBulk=true&showStandingOrders=false&showBulkGrouped=true&sortType=1&sortAsc=true&omitOpenEBills=false&omitDeclinedEBills=true&isLoadMore=true&omitPayments=false&status=25&paymentType=0~2&paymentType=1~3&paymentType=2~5&paymentType=3~6&paymentType=4~7&paymentType=5~8&paymentType=6~9&paymentType=7~12&paymentType=8~16&paymentType=9~17&paymentType=10~20&paymentType=11~21&paymentType=12~23&paymentType=13~24&paymentType=14~25&paymentType=15~27&paymentType=16~28&token=D6MZLFc3U4W7&service=overview&window=1584542590428&allPayments=false&_758_xprot=/$xp2/2HlMFLS28_QuDyUVGkwCLd8!h99MOGBUmGmCBdEGHQ87hVjzZgbkwR5hTXAQn611D_4RQgPAdWvaHwuDtFLednIVlobhXMicObQwhi00k3dTeCxS_6Q4m3qBjIgZOn!Eh09P2yoaCiCNz9CF2kMMcY944kRXf066Rup4M0pA9K_r!P7LaGGmaCX7sGeB13SjFd3sH966xkU3s9PxvLtXBJgogHhDwnOJM4uUPw9KHDwg_59E_BeGNHZMv7ik9apk_kJ7gNwEL9MzWJAsU2j8WVjCQz5f_7BK1o5gXQjTXOvjrxBw_ZhqQE9LCr7daq4h5mYox70VfzRt5GSZDB56HvjxiXafG6IjXCDg139iqjBCRp0GTUaX4ahqywdSIv6v0QUBq4nHCTvTPKJgn0rqq0w6UInCVfTvgiTjr4vCcozhWyASp86Yy!1O!33HFInHpysrpfr7P!4OxDSYhVJbzGzEdPKWJkCkVM9HthGShZgmOUXx3zcOlyF!hwYzsP8NvNomXzAndTEjKLvObcuViOiYrZCSdCZPqEF_O3ZcO060q1bPfkGVOM2FW4O0FHoZTami!sD4QrLUm6rxRcTsS7RpYE!_WKcaHpceH4dq9AJjOi4sWdOtzMx2al8TVDUaZ62!8_qc8AH84x1eIGoaUyGSW!bqa7dozISaA!7gJiy33Ts0qbDMNRld70nYzsBw5uSBwcIeF8xmY51EGdssCfmkf6yTwt94yCSALshWBzNRx_MVEHsx5ccUVnUAo3u_oBNDB9YQGGoI5oyk_32v8F5S4pEcacNzDQC9UmcuUHLN2WCWHJORFXKDb2zD4JcyCbKlyXWR9QJSiSvV2uS_1CybPSUkfNYjq5ciwqFothIovpSyUrVNkwcCyQdhavwpPMCakOK6WZLxBkpPfawTiZaLsTn2qwtugPFktrrujGxDv41seKCnHij6q_yPKlOaoqX2MnhaNFsxq3FKft72De8UjrqBl9A6WZ2YzDiznBIMzS3YfAH8BQZjY6SJUtUhnuF5AneHLFsGNzF1Tqa0OkCAtI7GjNQ7p5558VlYvirqHM_lncC6hfwMhQXEcAgqEVGeeUHcEFoxnvsYezs1rfJaqnhJOhEO8w9NIOGdyLHoNTiNzSEClgbqinHoux!B8vLsyED1lsdTWoKqzlb3xqAEnz5wTo3rI8pbAn2_!JeXsvLl0ds_15FKp4GHDmNNgjCl4iiMWn3VflpT99EgF8T6UcJkb8NVSz9lSBPJxQ5yz22IWynOopgFo_EBXi7B25AU2gsnFZNgr1WSwMHPOfZuPCh1wCzOCju3jZKDtiWAMbIRqzj8vCMw5YBk7385bQq1cvwIkfojjZsHC6XsrppnoIDKhiBKe3u4rThOOcKWrbkyubwHM4!1qD09Fj6uLEGN8N8PvFkEpaAC8rHatP5eLHW9AV4esccq_awpfTO!FEeOzkMTu77xzPp!dcjH3nrzOQn1WUta0PuhIoKbFSaPrl4!hRhrzMwDaFiIjqcrniSYqxANVcVREolixJ_C9G6nUNfGifz2rhPgAuRGg!k6!L686Td_FuaXjPhEF04KnwxE7UnHcqGB6argU3j4Z2Tn6HvTgFYieLDmDms1myJ9hr5!ntwfluzsAMUqa9DVa36n4lLfHYwHK_mffuVxTorDyk!JFJvHyp7oVXTwZnBDJgny!P8jxx13AGY5_k0NsDKGzZ9TkAufhGzI_ZcGGpcpzwJojJAXZKLgFIRU2Onr!zUAZizOB0KYwmENEj3dsY8sE0o_jcikq5JwDBB5SqnzmrwjbzNDCDwPJSfE!XZadxKjmE9YtHrgDtjcxcaVcaNnqaf_!x1Jw5Y5G7y2dE2VgaVr2TRC2KmpH!ZbP_9hJIzUym0IyVcislwS6JV5L2AqUv2k7q2QW9ds3ThWVo7_Sl!_i8DWkk0tF!DrnZT1nYAjNEO53QsLQ2s05l5tVrIlmT74qOnwB5_tmaOV8M7e3npNkg!xGCR_zA_LOhGN4ky!muu4Id9_xkHG17idVPRqRrogKIKdDsjwpv1O3NJ3kQcChjYp5lAPeeGqoMABVqxuf5OggMBkMtNOHRXMRejvIX_Ehwji6fYo_BL11DEAGwHiqYpmTPl6eSwGc!S6CeEneqNEINTnadhyzcEinsRofS_UGn357ABIYz4N0PeZEyEOvPBc5aMIvupKat0qu_09Oguaqnh41vIvjYYdN9gbdejkQvqFaIcF0blbs!IRLLDia2nP7zUBUmuQobQ6WUNDFV5YLy5VNCuW7Idr9Az82AhIC9KIDBTSEprAdZrm7CfA77E9PnQm5_CZTXJQXmaRgdMwi!PghVhxiGd!Zi9LCTGTz5gxI1GogahmU8OW!SQtCXxl4073G4t0nfayfrEZ2QZgQCpOZsPlyDFrMuZu9AgZAuVG1k0PdswgCnkT99vUHLdiYcnK7ZqgqeshzP3LIvTjFtVg_sgyGPaZkH4ZCft_sl6lTgM7_2HEqQfx7305xIOeaNjQcJ3GPRQmrunwt!XOBy7IS1zALHNw7f_AxxDIP59RCyXfvZDrSFhU0VXEc6dBOfIpuzHveIah2v2gyWr59MdSZxl1t5LNdKdUv2AW!p5s6eL2qE4w1hsRzArhNw64DZ0KqRPB6wXB3cOCtdql2p3k7WOZPTxiH1L_GPVtFXNgD4BOck2EPt5arSoFfmqW3Dbh8BpQ0VImGDeGbAPZlyi9xJhtWFGdFn8NuVLGRCKMiavw2aibQwQzRYBXKYMY3K5kwThLmZu66sJAaOxw19WKVI1p92mw9fM1dUKF85hT8c!z0xH7yd9DEvgPv_znIygWgRvXj7vB9IiAv_4hYDcELzhk1wRYDDDPKWSiScLoivrU1ftHF8xP2idR5CpguXMYU2owBhnPeQJ0rJqHOL7NcPq6ZtG8q1zzQX1HdOOZlTaQOA2274fdYf12dZ9QBAOrYfyB_Q8j54iMy_UfS50NRRuVYghoiOgUNgQYXQNGpeSvLWqhPynqbCDRnwKajwfQac0kTpKGLBI4kH7wDDn84hvGdxQ2ugamDjhqRfsZgf!6NX4cZEiYxuGSTRjfbw6GCeer82gVV!SKGkzqXjfGZRUMtZIDF6stXzLVvp2zpBCnkbLBtK_jMST_9RG0BzaXNpwt24Xoob078XwNiOg7rMCKjVeH4E8ZaX4jq4yd_hL1j7lZ_9xWlchpBBRBAk8jnmh_0oPK_y48O8AR3jhnl6t_LQlf5Lm0Wx7ryjzZbxOfIBtv!Sr4mThGiob_RTlTLVyZP5CjOUvq9VH9s3znIwTUi24lEO_5M3QDoQVr3JXMz_0SGD!5GewyzQxPfy4vQoIx94vLQOpIuXGNlfbSvgYQ6zqMBqIyZKg42YpcpBj0AQlhHy_SF0f5j8eF8TlViCiTYAxMYI6bFsdjbUxhIuqgmj8zpbtCebfHaz2KUTLtuAlCpNXKL37ZU4Uf63Bxdy3aFbx6SOmDGBXUZxv4UVReubpMxWDEBaenRtD3e8kt1tID1XBz1N81GgmZQILLM2JUk5tu7z9rb32vQPzIiUKvDdzUZZjBR!yz!cEllFXdfPbJyhGx6lbh4iiTPM9arDG01kOL88dg4hFjb4HhvP_eJ16lAiYvJhzap5UR_QPQ_QfKUgHdxA5sBUm8DP3Bll8o2yq323U9fQuFSwVt0Ex1ke3rcrHR1bo9wPIAVH9oXc9qVdljlByC7vmMwvTGo1x6E8nrdUJfkIqEvKv5ml9GrjIuR0MoCm4aR0mtYKhmJE6aK4oU3_7HySAb5rYs9IKz1lL7Fjd1vZRne9oSeqyexh8gIxvgHeXKyK3BiY9bd1b6PCTte70_xl9k4MRZetCja0mmat4JCt1PvAqn6UMK7pflcsp2qn_ZDj3cnO4rPyyToVplDjWNZkyJBamOoTEoO3O0_w2pJpbb0nVNQ8fQVS!XvFpGFCxxPnXFQEt1_PHJKRM6lAkpLgran8VYhOgCfGl9wiSePa!hxSlJPwTf7yuVWNyoBDnjJ!OYcdvgFDdrxhLPAKPAqJd0F6oeDO74nwOh38KtApeO777lWvW1Neykq!RHC!rVhnhoQbjFIdKcXsAop3FzOH__BaVtTamyIXZaPvHBZgqHFZ0AJvo3KeWEGzEzGADi8uvuPGpTGlAMPGJgFfQ0KkzCgYVRvZ96is_gwrB3_jBYxBu_kTfLlX!AA9cDXjCwcKFqYuM4qOw5sjkqgNenDnKqScxyIhtpC1TkKzH8AgWKLj94C8eRkyeALM!wjUN2nIZyAvd9xtaYS8h4BohAOsJRo64jO1mo7hEdnYtoKwZ3HOjXzFUSLP4nEzCO3mukMJzEL0tiMlpUFN0mS9At6JUhiEIlyaHE7M_8xr_ZDKKhUZEiWVXgU7LCF36w3_!EM0gLrDM_!669FhIGw5aMl5Fv4rG4C2BWaJbN2BTkHKNsTfNgLa0BIuK!ZGPlrRmaGvXaiKzCWlO_gWWHSsH2rg0PcUMa9j9TIVkZoa17RClMKPdcqEGIGMZVrbMipS4k0KzMApjbGtTe1n8vJU7upLVqq2CSI2ky2c0aOUAWbv7hFuerGPHW_LsKfdlEqZ4vHD_0JClrZGr3xYEXN7HvVrx3EMfmFRMc6kynagGCdNXvG!k23Iu8l0PKh7Rpts0eu0AT9h79y6mxK8mOx91gdGLG3wwEf6qA_ib5YdF_kxyAWqBXv0zXE6Zdib89tDGOgUyRbPlayNcwLnSU5dc4SRbUoN0A3JNU9BNwscOhPcYRlbUpv6vq_WZGCW08lVPF8KsVKbEQAkiKMqDac68Cye1UeurQH8FxQAsjvcIvpv56HT81PAXEjay7!NyGzMFlazIK8Uh6InxTQsu6tK88wTMNZhqfAUBfHVMFrCF8Fh4EYiXkFxqbuGE!ytztEmDrJSNLVoSSR!2GgjZs80!0gggbCBf9EofkEZXhb81ldbL2YiZsOFQvIUFI4j2XD3IibUAxDWlFwnZfM6YnvJI6oRzQUweCzoDp9uIxfIOpZ57sy2mIK12DRobKcr7dtNDEhGkPdv1EhWxJ40QCi6MaYPtfzET47F7P7CpDVMURqGCoRsmX2sx!IeXwqFRwao8y7h7BC72L2tZhHLC2tMmCeU3R_fKlBwpc3HuuMJf3islMzlAkioNlsWltxUtIlZAXIrvQpoKUlnNxC92xmVvRSG12NfqepHHgV5bm2qDNaAdMENU5uuWx2s0I!4aS!n5w73gkLFOmE49VZfmrkCjRQFSM57O2m0SzI41qw_AbMaedlmUJLPJC42ymJlIwTAfo43dVvrJH9s!ll9R8dj469uCFSfp7PlfOp!fAT16_OYO2safl!afJ2aMXLSeKYVO2WaWgPEleZTmiNfMo_!zlF7AMtWpg0DwnoYgeYv2LtuqFLaH9KhVj!Le3KWVlUI1VQ_Ftkt6vDfMIwAJCyzdxK4b7XqEduPYDhMjzn0jxYtik9nddmL38e_KRHItVQS3zs10xUehumdae7moXlepa8XaAQdrIiMapit64a86nDtDOjuZgAKYRlnNdSKJNLwcSoh1M7IfUnIjfUSi8GKRPLQiEU6dR1uNQlgR3mFRi5Ux_Y2VKMWDQ74wwMrF3STKL8u6T4EAJxJ5_6WVYN98Th3zbhakdlz0D213Yyhp6HuqhOhaaLf5619GFAEaGzaRewmJET51YRVd_ljWeTWZ9XSp0CWvvSkVYiQS!WCOvPSpEeqDdWWWh3PulHitenpye9TDefpMrJcEfnaBY0CyjV7bSXGcJ!Yu7n07b2nNE5WudNyIeGsv_S6OXNWDZWgzNFcRjnbWsczBIlODTRkxIMOKx8ON!Ee8iY8weqJgKicZuLCNY47AhZ50iGnTxD1JEvtLtOM3wgrhd1ZXCw_eIjyiIpdf2TYH9HJ4ax5mQcCig__Xi29!9zVol2ggf6Giri7DU3fKFfLr2dE7xF7jaF_YKoFR0d4ihQyBbmms_csqtxPVsv2QtxzDG5z7e8kE9nrVz9oghfWDAVxjQ72AnDdzpsIbE8z!AW5Ld3HHnPeNa90hJLpeixI84KAAyPpKCA5GK3eZNngEbnZ9T06v6T9tXZDtmibYR7GZap3WGTF1S57uz7rYuRVDuYPnR_X6R_OZF_5Pb4HqVK_OCPBksts0nBtuFe7gA1q147ANymZ4qg_vuEQjwdxQ2wM0tQHlSzpFjH5iBNksgRpxtde2_Cn4qXM4UjZge8cGvn3O!uYaf1yZ89HSmVO3SIqWe9D0YDMN3tPmFx1TDdK9It7tFBrUFQGqj8Zm_UUQy9kM7m5TuX49gdAtaHfe_xh2scgBgUg31qznzufP56yOPu2Fpx6YqGF3zZQas8T5Pw5f26OrDYMrSLTVEV0sRVeykrpeyyLtcJMWNkQ960XPK92TkYowWHXtVjCsIStilB8_vbdfg1IxC1lOmYzIsuBt!9hSkG9mpx7xqUiE04tfEW!778k8!bMQ9vXpAJjBaKps849BEo7NDG6AtYm4WYquq",
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/vs7sYD_W8S3xFhQ5EniEVPfu8aFq4zhaltUXkrOq7Q1n863k7GgwQMLvrC1OIW7paM54D8tSqKPWLaz8Jsq6UY6yWVI=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/aOuVDHy5sQvyazcqgWRv1GXP9R23yKrgFO5XBCY!_RTzu6TzHVjAvBdeC9ZCQ!vtFJ5RzpoGwpO4knkt0gAl!SPu5oZX1JWVaRp9AbpvSXUD5zfzo_7Y7nGMllpGsv70qVKuaLjxF11ruthASyGq3z4PGQ6ke_fgq7EkqFPr7qo2BrrHn7kgQH8f4bQMra6W_MzZ1ZrqYYcrEMGZcNNrvsl4BIswVwQuW9691KfVfo3HD!W5Bf20k9jEurj7kM2866tJWA==",
				"service": "orderOverview",
				"token": "D6MZLFc3U4W7",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("2e. STATUS "+i+": "+res[i].status);
            // console.log("2e. BODY "+i+": "+res[i].body); 
        };
		sleep(3.74);
	});
	group("page_2 - https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/OBUWt964GGZqI_NBVT_c1DWIEBYEZQBnbPifLGbDZQm7Qi3qW1gfPoQZIzjJRszgNA8mYhQmudct_zhMcUkLUHOcgpo=$/p/p/p/p/p/p?page=currencyAccounts&_758_xprot=%2F%24xp2%2FxAuF6_XEK7oaNzBpFPRAYm6o1FAL8%21HI_WkJg9Cs_GRQ0NYagAApCO%21nzCbG2_uMZvfZYOYzUSmGc8XKtNMuoHPwVMFXRb9hh2g%21GJSAwuvIfrI9TAJzWYuD8T2FEcTza9Jhu6nmCHd4idTEW%21z4pCjnVgS_7bKAhiCuDZ6whuBJj5FqEsbTsRs9F1lwuiYxBv%21m623uWuQ0VPJrKhU76cfqtNgHK5F6hz6P7sak15gz0_jyHecuAW0HPl4sPxBeIRlG0KxzmTh3DkforSCgEcct1Z4R6XsvkcGP%21_poVEB8MYBKae5kmSU%21SLPa2fCCmF3_KlP2nV2mXu%21FoY8albrFtpUhdb%21J6N17srdqxAHiQ6Ox", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/OBUWt964GGZqI_NBVT_c1DWIEBYEZQBnbPifLGbDZQm7Qi3qW1gfPoQZIzjJRszgNA8mYhQmudct_zhMcUkLUHOcgpo=$/p/p/p/p/p/p?page=currencyAccounts&_758_xprot=%2F%24xp2%2FxAuF6_XEK7oaNzBpFPRAYm6o1FAL8%21HI_WkJg9Cs_GRQ0NYagAApCO%21nzCbG2_uMZvfZYOYzUSmGc8XKtNMuoHPwVMFXRb9hh2g%21GJSAwuvIfrI9TAJzWYuD8T2FEcTza9Jhu6nmCHd4idTEW%21z4pCjnVgS_7bKAhiCuDZ6whuBJj5FqEsbTsRs9F1lwuiYxBv%21m623uWuQ0VPJrKhU76cfqtNgHK5F6hz6P7sak15gz0_jyHecuAW0HPl4sPxBeIRlG0KxzmTh3DkforSCgEcct1Z4R6XsvkcGP%21_poVEB8MYBKae5kmSU%21SLPa2fCCmF3_KlP2nV2mXu%21FoY8albrFtpUhdb%21J6N17srdqxAHiQ6Ox",
			"params": {
				"headers": {
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "document",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
				}
			}
		}];
        res = http.batch(req);
		console.log("3a. STATUS 0: "+res[0].status);
        // console.log("3a. BODY  0: "+res[0].body); 
		sleep(6.00);
		req = [{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/desktop.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/desktopModules/assetInfo.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/components.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/css/soba/workInProgress.morphBaloise.css",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "style",
					"Accept": "text/css,*/*;q=0.1"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/img/soba/clx_pointer_upBaloise.svg",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/cito.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.hammer.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.ellipsis.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/jquery.floatThead.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/highcharts.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/highcharts-more.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/exporting.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/b.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/e.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/map-core-login.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/api/webapp.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/js/lib/currencyAccountsApp.min.js",
			"params": {
				"headers": {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Sec-Fetch-Dest": "script",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/MetaPro-Normal.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/morph.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/MetaPro-Normal.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		},{
			"method": "get",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/staticcontent/html/1988163737/fonts/morph.woff?lacuet",
			"params": {
				"headers": {
					"Sec-Fetch-Dest": "font",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Accept": "*/*"
				}
			}
		}];
        res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("3b. STATUS "+i+": "+res[i].status);
            // console.log("3b. BODY "+i+": "+res[i].body); 
        };
		sleep(1.33);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/NSk6R5gT3PnXA9!MORUX4WxFEuxdxhp!GI9jH5HI0_8Uj_c7RacxDx6F1uJR8rFefcZJGxbj3Uix7KLDo5EV1o9RxtI=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/t16YJUHILyGCcM!vMQgFS67KQIu6GXaBBU2o!R!F!okdjtjVgym8TaUeaJFZ6DatB9HB2JnL6MBsNda6BkZgpHbUWJ!LPhtzAVOW_zmihP!M6PGh0lU7VqKp9NU9fxvSdrubLOvaiIFEgdGryNEfAINT8FxvIXr89ifNFTkApsjy2rL_2tDN5JTkMmCOkQzeThsSi!jMopUu!Q8EvP1tERnRKB_Xtgkwd4fcUMgzoJgE6cb6qQGWJ6mbsizQo4cUssCIdHHf9HcDliMtdOJV3WlF5CnXrjW3m25Gehemm8Wghntgahy7r3UjtY9XVWS8SGvEvs44vUzUXbmkPSXPgR5XUkRx8CVQY2iB7fiugZ64U71Q6md!jF!ff0Q0hy6apfCxPQneX2GknyHEyDIAkKmHVeWFDnr0PtRzwr!1F!GuZiKItlv9hCgwJGWnT3zkBb4pKeW2N0fQ6TidxOMKUCtiNusmBo5Uv1iNwkfqaeYNzOWKR7K34cvnd1zyPqp1i0ecrlfxAE53QDXSXk!tQ0!euLXhMvJwFlCwZ0lpCmDqzKUMWiqdXqudm3iqrwbBIqF5z9TOw06q76gWmPCNJyh_c9wkBUUzXh4Adljno8FTL10V_jucDxzWbNlhMBfakJX1njTkPSdzMSk4A2EwlU1VehjfuuevUIVxUhirQOMFs3XQjpDH2qZFF06SAn7yLCA63BX86NIoEoXLERpzUeIDWQc1SEpewlMMeV_6Pu_mmG9vqyVYUgSb4xYFb8t0RZpsAQMucTdV6qfPUy0j!PjnuENss2mShHHMs0t9no3_g5ktEaDBJ79d_IsWZPffp3ne22Cd3nBYpANKHKkuRkOcAeSnwZrqd1ifgm3GIgWNEoXlio9gvENWGsM0KrGRBsMTuGFML7P_!Jjni86gQOWKEL9lT1jeOfkOexQtVkyFHsedoZd5G8LmJoTz3Xu6gKDhsxJM1v2_E7XDLT!bKsblJ_Ar4nSbGlIr1_v_!qWqH8Q0ATi48WPosiL_Jxuh1rUkPAYtp94z2nrTqc5leoFHmasDmE87MfTZmjqU8dwRWoyXC1NchwtvgSAGBzptYz9Y4kMF7!oBxkd26PjnqoMvDa8hXsuDfZLiOrGAFzCTjynLiBYlhS40esUGNNKIWMX6UW!hpDEC_J5BolOAoVaSo!7YY9sW2fAcwKXgPPwolim8tgJ4W07I0_qCqV879zJMldv7qoIn3C90tfYZLR6F3g1aAPR9yUs_w!d_J1YO80PSpqR6v2sTcd8qvpOrxZGDgYw9vWmM41RwCEf5YBG6vOE4JjY2lBEcraRL5Bm_Svak38Ehrvh8RxXlC0enUz4ImUTasw42N_AJMpbYwAuDbBTwMFRFAlOPa5Y_TACHMrP4jYVRmstBRLCkZYGbgllwp2zZeXF5MoQlbUNskuYKC7v6PoMXpRsiSsB!5mqjpIUoo4dd7TYMER7b2c5wdnSwHsk_hwrkqfo3f9MrqNr5k6XaJTGvLifayNdmGgJ!KZyJ4C9U5!0rf_Huh_JUGyO6I6vE5dc_rNbA_!PhbTGXKkKMMAW!1TKJ0a7suMLtl0zrTHFL83_Sdia9DW9wSHXz!Fut1CKnaKNp0KHKW7WBLhPrGmWR5WA8UkcQL5KAj3jbEJhZ81A80cy6PFrsEWWhKLCtLjEmfdEaYCrGwU4s7pvJBO4ELG5_H3AOQ9PcKo1aN33v5NFIhAOL0Fg65wg46jOaEgYJnfd9wazkD4jiv9l_gkmrIsDQgpO_7byhkcwxoKIUFDJzWQM0stWREV_Le59xjZJD32N15UhxoQoyL_NIkbhcfAb599Hn9xO49ku_udr6SbYxTEjDtfoVRKNYtoWDT1EArTqapEjmTDe2CrHMvBamVvUgFyA66ds4lMp!SlDPuD25FD4AM4e17lJ5tJsQs1Rpc!40PasunbQmNeHVAyUIFRCfpGXjiX1HB1LyWsLkexsREgbLQVMmMo99czpm4ZDiNrjsZ2ma0xS1XB161hLHVUHeWpF2vcbvVtYsRa5HIoCe3jfQs4TI8mpHVCcnYQaYVPo_nF10!LQTiR3QfaSUbSuSSJf6mFOIKUPY2REULA2wndc6Wn55Cd7ZgbdxXLYcPJne1TJs8h0rTC!w4Id4T24bRYO5ziT9apnlL41dEgzUZwdkWU0uvYorTsHfIaRWGHWAxTQFEEPUskZ!wRvVtzSw26L1gSZyrvje9NZcGQnmrtVBZRA92HWV3M8CJLI68UXbM7y8AfduAg9GzxyTuUQKhbUX7HgUDcWONYorxNOrDj85FvH6TdAgLwR1QlUwLUPKfdPeRPOosy6jcg7W1C71UMPe!qHgwKZsXzLA2ItCORm8m05sQFF2npoJxsRn7tPs6Q1nsLb_l!gukSw7tJH4PQmawOxXYlY1XIUeh1WxgXwiQvhGz0TUrRUxVH4mwEldXL8N2C3fECARUBJ1ddtvz!3wPG4V8Vsj",
				"init": "1",
				"isWithBalance": "false",
				"service": "assetInitPage",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/6Rxrhnekgt5VOsqvzqJTZ3Rt3LEZ0!qnZYb2!ngbkrN6Izd1wI6UBA1KrFU0h1pgpy!YxbAaKL5m8PBanp4tUQwyw5Y=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/q7CUL6OmUx6jgVsofD8OixI!DszawnXQ8RixzhmppA9dUapOrV6DJ0CAjSAeQWDo71GSKYjfLG!ne5vikTcSxhMPSKf41kkc4JqYBvIEg3_4ldEiOXlrNmSOuLo8IT!2ONBV4I9M!RV70nN6S!P1uTcVDSAgd7S7kuMmZkM08pPRqJ8BMOnLP9jPcJKtD0okSbgJGDU056ajNUMsQbMZqkOi4!X!s4ZsnVT12IfQ8mN6Xj8idAkWcKxK71Ej3Ss1SG4yjuuBNuCUHOqKMkr4yvgW7YJ25qcEcdSp0EzSsQ57y8GgTAIJd1auce!LrHA6ZW2lzsn2qgR0bX84g0NEtJlWWJ8Op7!UEFBQtkEAX7yce8Mb0lsrzMUmf!HgUMYghaHfmZGcdfNyGiPFbu3TEgzFvs6E6h55tuzgnUqmuOLVzTAhNiE0ibweqz3Q5Od1NV7Utjo!OOqR52TyQS3aHO3PMzU_Q_36SZxM95yLMaMNIFV_bn5svz8YRm1o0mVcHb7yezQFPZFXEadAvpRHn!tyAysPPbZ!xoclJWz0o_Fcn7mmmg5fr!A4T67oOnUklzwm_POKq69qNcY9a4uGO1GlPB1SNl25F7jg9q0ttriKNIxI_zwXOfEh0VMKcwSJx3E64FlTwXjA!Bt8oq4uUIU8E6wlt!rWiKP54huvghnv!008o3SWF!eLZalEDlzix2gj1vItBxJ8bWcskiavZKRlOx2Xj91Jf!XA_5x_rL7bV4qrxoUZblA8ZXWDT8y_y25N6FYvol7Y4Vfk!7p0MlJhyNBaZ6gfr56ELX58rehw5sr2",
				"service": "favouritesOverview",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/UlGSOUTqGJFMjvQceLHpE2nWwZut6ng7ehFnJ0gfQ3RTYVy0NXzH68H6vGhc0ji1sxvr_acIFIa3u9yCd6OOPfVDW2A=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/hEeLPYVEqcTvCllxaeq2N86pt9PYnInxZIS!GQBvoLyd9TtNjxYTOoJ1dhCjuV7Qpkw3VfevHJ1oRDoE0!FmHDQC3kEYD_Pc1RmbM27aJ_uPalwC0K6F4qBzyHwvz2PwD9qgbjrrwgUiilk0b5RlBDzjAYGEqhziAGajd1s8QP96woamw58qUQBIYpgnbs8AfOFaYl0OZDzh4fDmxHMUilkWRhqtp8vY7xpvWn7hkq4WbyEvhO8sYrzYWjSpPTtPtuNwRts5lbfyEKMtVteBExHPQ8QqJUshdZvDJOd6TgB4T!0yZZq8qceEUQh_cTsPVAiPVU8f8SND8ZqyD!NJUVxSqNWzzr0kocKFwkBeb8tdh4_dQ7zn!mlCrAh!VmEUB4iKfDdQZMErii3FNtVbx6VbYStx0oCe!Hq2W_BplH8lhh7uqp3kQ2OFXOxr!IQwVFMLZmTIo0FYYSKq6PUS6mIVDm7alAtAsq0Gv6aQM0pySvyyO6igV4IbZE5UIEchzNiQoE4gKoskluhlA4U78GjeOg!4oj8QKngeCUZyESHT1YzHySbvPSVliIu0SUP3m!NR91McFVpyohz4lNJLq!P5p6CF4c483g0BHyzHDanQbxL!yx!uckX2Rsn6HuhaGlsPABUYByd7Zb5mOjIvA0MNy!8QI54cfVgUzso3OicWfyWgaAUD5xMYlO83ppUJDHZBy91Aw2Etyfh1jbiGh2QnkzHqd5k3G76gqFTBBw36HBN1Vte8MjkNhl0KJ2Wbq7fGcRj7S2qsAxgeYOYQxKh72E2c1M_s1JucNPoU7u!lxYP1wGX8RcGQoXZWapXtnLeE0ex90SqYul_6t_DkelmjvibZccfs4oo4W51zNS!3OvekgO6dix5AJQOIwbswryqSzAdKPDQhE9ZD9jOsDJwxRogGnAFoJ6vMI8Fb80hK6wTuILW8ZNtVB4xAx!6UJQ9UrkaInppBqzucnkgN6xjj8SfBxAMKlmPmKL6esgIe4nZwfMsi!xv9kYLn95N0Iuyi0RDTA92KrIvAt1UWGo9NyUJu1eF6j4jzkSiFqdoSpe73KWtBWHV!NhdcH151g67pHlxAVoigzxuzkr_azdpjp3!0HskPbDe9txv16ENzGjbcSMV2Nevm1kqugDsEJeTxt2gbJ4jVz4BopiE9Dqh3vqLfKyPFuqFKp8VVKttgcDH0XdPlRt0dj312gVuwqVcCn8DE6tA9_5aRi2JMD9OObO010Y8A!gfpTQ4NU7f75Yyj_81pYzO7qRCBqKJ!3PSSsa4kpb5g_EQGCUTLhKi0fCjwnPdrxT9YxFdmRPmEsCHvmZqvsI5rRT_XSnQwu0wm_0IdXGkaYMGgywr!DilBKIMDOXUEebXMviB2TTA9TL_wJIr0C!91DBdg0Bu9rbU54t8wea!7yJu8qSAEFRFdKY73vJNxsICAZrDg7HGDMN!X6wFQDR1dS3pzHALbaVdybYmqVuyIh1blxgwHm1g7UJXltFiTJkHwTcwuhCHe!na50VO0EjCAMvjR7MSQKAGaGsAW76inm14WAB0stXaUSsyBTszLUdu54k41zwqMZ5UKbE_3FpCU!kTjiYvUn2ZW7h9X79hRfFrPfxAEkeBjpgq1rjQjH55pYGI6OKXRMgzXk8Vzr_nQLUZ1AoVFi5qbxbGND344_m6zj_dVPJbN_fmJn0USusOadhWbNF0MVvhMbQEiRTaN1hj9UWMs5!ddre6uvPDLVXqBLBaU8Rg_fXIvvM4JP2925Ce6LyWaQaknydlKWmMbfxsd2BbVHB6RUQHHS811E6e8S2ZUrw5X1co=",
				"filterPresetType": "76",
				"service": "selectFilterPresets",
				"token": "D6MZLFc3U4W7",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/NSk6R5gT3PnXA9!MORUX4WxFEuxdxhp!GI9jH5HI0_8Uj_c7RacxDx6F1uJR8rFefcZJGxbj3Uix7KLDo5EV1o9RxtI=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/t16YJUHILyGCcM!vMQgFS67KQIu6GXaBBU2o!R!F!okdjtjVgym8TaUeaJFZ6DatB9HB2JnL6MBsNda6BkZgpHbUWJ!LPhtzAVOW_zmihP!M6PGh0lU7VqKp9NU9fxvSdrubLOvaiIFEgdGryNEfAINT8FxvIXr89ifNFTkApsjy2rL_2tDN5JTkMmCOkQzeThsSi!jMopUu!Q8EvP1tERnRKB_Xtgkwd4fcUMgzoJgE6cb6qQGWJ6mbsizQo4cUssCIdHHf9HcDliMtdOJV3WlF5CnXrjW3m25Gehemm8Wghntgahy7r3UjtY9XVWS8SGvEvs44vUzUXbmkPSXPgR5XUkRx8CVQY2iB7fiugZ64U71Q6md!jF!ff0Q0hy6apfCxPQneX2GknyHEyDIAkKmHVeWFDnr0PtRzwr!1F!GuZiKItlv9hCgwJGWnT3zkBb4pKeW2N0fQ6TidxOMKUCtiNusmBo5Uv1iNwkfqaeYNzOWKR7K34cvnd1zyPqp1i0ecrlfxAE53QDXSXk!tQ0!euLXhMvJwFlCwZ0lpCmDqzKUMWiqdXqudm3iqrwbBIqF5z9TOw06q76gWmPCNJyh_c9wkBUUzXh4Adljno8FTL10V_jucDxzWbNlhMBfakJX1njTkPSdzMSk4A2EwlU1VehjfuuevUIVxUhirQOMFs3XQjpDH2qZFF06SAn7yLCA63BX86NIoEoXLERpzUeIDWQc1SEpewlMMeV_6Pu_mmG9vqyVYUgSb4xYFb8t0RZpsAQMucTdV6qfPUy0j!PjnuENss2mShHHMs0t9no3_g5ktEaDBJ79d_IsWZPffp3ne22Cd3nBYpANKHKkuRkOcAeSnwZrqd1ifgm3GIgWNEoXlio9gvENWGsM0KrGRBsMTuGFML7P_!Jjni86gQOWKEL9lT1jeOfkOexQtVkyFHsedoZd5G8LmJoTz3Xu6gKDhsxJM1v2_E7XDLT!bKsblJ_Ar4nSbGlIr1_v_!qWqH8Q0ATi48WPosiL_Jxuh1rUkPAYtp94z2nrTqc5leoFHmasDmE87MfTZmjqU8dwRWoyXC1NchwtvgSAGBzptYz9Y4kMF7!oBxkd26PjnqoMvDa8hXsuDfZLiOrGAFzCTjynLiBYlhS40esUGNNKIWMX6UW!hpDEC_J5BolOAoVaSo!7YY9sW2fAcwKXgPPwolim8tgJ4W07I0_qCqV879zJMldv7qoIn3C90tfYZLR6F3g1aAPR9yUs_w!d_J1YO80PSpqR6v2sTcd8qvpOrxZGDgYw9vWmM41RwCEf5YBG6vOE4JjY2lBEcraRL5Bm_Svak38Ehrvh8RxXlC0enUz4ImUTasw42N_AJMpbYwAuDbBTwMFRFAlOPa5Y_TACHMrP4jYVRmstBRLCkZYGbgllwp2zZeXF5MoQlbUNskuYKC7v6PoMXpRsiSsB!5mqjpIUoo4dd7TYMER7b2c5wdnSwHsk_hwrkqfo3f9MrqNr5k6XaJTGvLifayNdmGgJ!KZyJ4C9U5!0rf_Huh_JUGyO6I6vE5dc_rNbA_!PhbTGXKkKMMAW!1TKJ0a7suMLtl0zrTHFL83_Sdia9DW9wSHXz!Fut1CKnaKNp0KHKW7WBLhPrGmWR5WA8UkcQL5KAj3jbEJhZ81A80cy6PFrsEWWhKLCtLjEmfdEaYCrGwU4s7pvJBO4ELG5_H3AOQ9PcKo1aN33v5NFIhAOL0Fg65wg46jOaEgYJnfd9wazkD4jiv9l_gkmrIsDQgpO_7byhkcwxoKIUFDJzWQM0stWREV_Le59xjZJD32N15UhxoQoyL_NIkbhcfAb599Hn9xO49ku_udr6SbYxTEjDtfoVRKNYtoWDT1EArTqapEjmTDe2CrHMvBamVvUgFyA66ds4lMp!SlDPuD25FD4AM4e17lJ5tJsQs1Rpc!40PasunbQmNeHVAyUIFRCfpGXjiX1HB1LyWsLkexsREgbLQVMmMo99czpm4ZDiNrjsZ2ma0xS1XB161hLHVUHeWpF2vcbvVtYsRa5HIoCe3jfQs4TI8mpHVCcnYQaYVPo_nF10!LQTiR3QfaSUbSuSSJf6mFOIKUPY2REULA2wndc6Wn55Cd7ZgbdxXLYcPJne1TJs8h0rTC!w4Id4T24bRYO5ziT9apnlL41dEgzUZwdkWU0uvYorTsHfIaRWGHWAxTQFEEPUskZ!wRvVtzSw26L1gSZyrvje9NZcGQnmrtVBZRA92HWV3M8CJLI68UXbM7y8AfduAg9GzxyTuUQKhbUX7HgUDcWONYorxNOrDj85FvH6TdAgLwR1QlUwLUPKfdPeRPOosy6jcg7W1C71UMPe!qHgwKZsXzLA2ItCORm8m05sQFF2npoJxsRn7tPs6Q1nsLb_l!gukSw7tJH4PQmawOxXYlY1XIUeh1WxgXwiQvhGz0TUrRUxVH4mwEldXL8N2C3fECARUBJ1ddtvz!3wPG4V8Vsj",
				"service": "accountOverview",
				"token": "D6MZLFc3U4W7",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		},{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/aDBAwb0NAPErcx1gTVu!dBLtro5FaVvhTbvkU7aoYsurLnn64btZmQR2oEobKIe1qKDCcA==$/p/p/p/p/p/p",
			"body": "counters=0~PAYMENTS_TO_VERIFY&counters=1~PAYMENTS_TO_SIGN&counters=2~OPEN_E_BILLS&counters=3~UNREAD_MESSAGES_INBOX&counters=4~UNREAD_DOCUMENTS_INBOX&counters=5~DECISIONS_TO_TAKE&counters=6~PENDING_TRADING_ORDERS&counters=7~REJECTED_TRADING_ORDERS&service=getCounters&window=1584542590428&_758_xprot=/$xp2/NaCvJqyp56ClNq_2oj3FhHIYGA0ITNyFF4jbm8v4F48zwe!rHh!yO08SME6s156w!bUjqJzL_2Cf31J7NF8RWiEMO1_00d7v4IDdjmeHBVOMlzTknOXpvE973n1li1bI64E!ya3oxl6s76KYf8VhZh1oXtn0J2cYAI8vGEc_Bkcga5Sz",
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("3c. STATUS "+i+": "+res[i].status);
            // console.log("3c. BODY "+i+": "+res[i].body); 
        };
		sleep(3.90);
		req = [{
			"method": "post",
			"url": "https://soba-r200-test.dbh.crealogix.com/ebankingCustomer/$xp2/NSk6R5gT3PnXA9!MORUX4WxFEuxdxhp!GI9jH5HI0_8Uj_c7RacxDx6F1uJR8rFefcZJGxbj3Uix7KLDo5EV1o9RxtI=$/p/p/p/p/p/p",
			"body": {
				"_758_xprot": "/$xp2/t16YJUHILyGCcM!vMQgFS67KQIu6GXaBBU2o!R!F!okdjtjVgym8TaUeaJFZ6DatB9HB2JnL6MBsNda6BkZgpHbUWJ!LPhtzAVOW_zmihP!M6PGh0lU7VqKp9NU9fxvSdrubLOvaiIFEgdGryNEfAINT8FxvIXr89ifNFTkApsjy2rL_2tDN5JTkMmCOkQzeThsSi!jMopUu!Q8EvP1tERnRKB_Xtgkwd4fcUMgzoJgE6cb6qQGWJ6mbsizQo4cUssCIdHHf9HcDliMtdOJV3WlF5CnXrjW3m25Gehemm8Wghntgahy7r3UjtY9XVWS8SGvEvs44vUzUXbmkPSXPgR5XUkRx8CVQY2iB7fiugZ64U71Q6md!jF!ff0Q0hy6apfCxPQneX2GknyHEyDIAkKmHVeWFDnr0PtRzwr!1F!GuZiKItlv9hCgwJGWnT3zkBb4pKeW2N0fQ6TidxOMKUCtiNusmBo5Uv1iNwkfqaeYNzOWKR7K34cvnd1zyPqp1i0ecrlfxAE53QDXSXk!tQ0!euLXhMvJwFlCwZ0lpCmDqzKUMWiqdXqudm3iqrwbBIqF5z9TOw06q76gWmPCNJyh_c9wkBUUzXh4Adljno8FTL10V_jucDxzWbNlhMBfakJX1njTkPSdzMSk4A2EwlU1VehjfuuevUIVxUhirQOMFs3XQjpDH2qZFF06SAn7yLCA63BX86NIoEoXLERpzUeIDWQc1SEpewlMMeV_6Pu_mmG9vqyVYUgSb4xYFb8t0RZpsAQMucTdV6qfPUy0j!PjnuENss2mShHHMs0t9no3_g5ktEaDBJ79d_IsWZPffp3ne22Cd3nBYpANKHKkuRkOcAeSnwZrqd1ifgm3GIgWNEoXlio9gvENWGsM0KrGRBsMTuGFML7P_!Jjni86gQOWKEL9lT1jeOfkOexQtVkyFHsedoZd5G8LmJoTz3Xu6gKDhsxJM1v2_E7XDLT!bKsblJ_Ar4nSbGlIr1_v_!qWqH8Q0ATi48WPosiL_Jxuh1rUkPAYtp94z2nrTqc5leoFHmasDmE87MfTZmjqU8dwRWoyXC1NchwtvgSAGBzptYz9Y4kMF7!oBxkd26PjnqoMvDa8hXsuDfZLiOrGAFzCTjynLiBYlhS40esUGNNKIWMX6UW!hpDEC_J5BolOAoVaSo!7YY9sW2fAcwKXgPPwolim8tgJ4W07I0_qCqV879zJMldv7qoIn3C90tfYZLR6F3g1aAPR9yUs_w!d_J1YO80PSpqR6v2sTcd8qvpOrxZGDgYw9vWmM41RwCEf5YBG6vOE4JjY2lBEcraRL5Bm_Svak38Ehrvh8RxXlC0enUz4ImUTasw42N_AJMpbYwAuDbBTwMFRFAlOPa5Y_TACHMrP4jYVRmstBRLCkZYGbgllwp2zZeXF5MoQlbUNskuYKC7v6PoMXpRsiSsB!5mqjpIUoo4dd7TYMER7b2c5wdnSwHsk_hwrkqfo3f9MrqNr5k6XaJTGvLifayNdmGgJ!KZyJ4C9U5!0rf_Huh_JUGyO6I6vE5dc_rNbA_!PhbTGXKkKMMAW!1TKJ0a7suMLtl0zrTHFL83_Sdia9DW9wSHXz!Fut1CKnaKNp0KHKW7WBLhPrGmWR5WA8UkcQL5KAj3jbEJhZ81A80cy6PFrsEWWhKLCtLjEmfdEaYCrGwU4s7pvJBO4ELG5_H3AOQ9PcKo1aN33v5NFIhAOL0Fg65wg46jOaEgYJnfd9wazkD4jiv9l_gkmrIsDQgpO_7byhkcwxoKIUFDJzWQM0stWREV_Le59xjZJD32N15UhxoQoyL_NIkbhcfAb599Hn9xO49ku_udr6SbYxTEjDtfoVRKNYtoWDT1EArTqapEjmTDe2CrHMvBamVvUgFyA66ds4lMp!SlDPuD25FD4AM4e17lJ5tJsQs1Rpc!40PasunbQmNeHVAyUIFRCfpGXjiX1HB1LyWsLkexsREgbLQVMmMo99czpm4ZDiNrjsZ2ma0xS1XB161hLHVUHeWpF2vcbvVtYsRa5HIoCe3jfQs4TI8mpHVCcnYQaYVPo_nF10!LQTiR3QfaSUbSuSSJf6mFOIKUPY2REULA2wndc6Wn55Cd7ZgbdxXLYcPJne1TJs8h0rTC!w4Id4T24bRYO5ziT9apnlL41dEgzUZwdkWU0uvYorTsHfIaRWGHWAxTQFEEPUskZ!wRvVtzSw26L1gSZyrvje9NZcGQnmrtVBZRA92HWV3M8CJLI68UXbM7y8AfduAg9GzxyTuUQKhbUX7HgUDcWONYorxNOrDj85FvH6TdAgLwR1QlUwLUPKfdPeRPOosy6jcg7W1C71UMPe!qHgwKZsXzLA2ItCORm8m05sQFF2npoJxsRn7tPs6Q1nsLb_l!gukSw7tJH4PQmawOxXYlY1XIUeh1WxgXwiQvhGz0TUrRUxVH4mwEldXL8N2C3fECARUBJ1ddtvz!3wPG4V8Vsj",
				"accoId": "20089",
				"includeBalancePreview": "false",
				"rownumMax": "25",
				"service": "accountTrxOverview",
				"showBookingDetails": "false",
				"showCollAsInd": "false",
				"token": "D6MZLFc3U4W7",
				"trxBookingDateRange": "1",
				"window": "1584542590428"
			},
			"params": {
				"headers": {
					"Accept": "application/json, text/javascript, */*; q=0.01",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		}];
		res = http.batch(req);
        for(let i=0; i<res.length;i++){
            console.log("3d. STATUS "+i+": "+res[i].status);
            // console.log("3d. BODY "+i+": "+res[i].body); 
        };
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}

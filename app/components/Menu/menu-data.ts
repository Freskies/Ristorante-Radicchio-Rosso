// noinspection LongLine

export interface MenuItem {
	name: string;
	description?: string;
	price: string;
}

export interface MenuSection {
	subtitle: string;
	items: MenuItem[];
}

export interface MenuCategory {
	id: string;
	title: string;
	icon: string; // I'll use Lucide or simple SVG paths
	sections: MenuSection[];
}

export const menuData: MenuCategory[] = [
	{
		id: 'meat',
		title: 'Carne',
		icon: 'meat',
		sections: [
			{
				subtitle: 'ANTIPASTI',
				items: [
					{
						name: "BATTILARDA «ROMAGNA MIA» (consigliato per 3 persone)",
						description: 'Affettati misti, Ciccioli, Giardiniera fatta in casa, Squacquerone e fichi caramellati, Pancetta della Giovanna, Lardo di Colonnata Gino Batella, Crostini, Gnocco fritto',
						price: '38.00€'
					},
					{
						name: 'DISTINTI SALUMI',
						description: 'Pancetta della Giovanna, Lardo di Colonnata Gino Battella, Polenta fritta, Piadina, Squacquerone',
						price: '16.00€'
					},
					{
						name: 'BATTUTA AL COLTELTO di SAUDADE ITALIANA',
						description: 'servita con salsa tartara homemade, senape di Dijon in grani e valeriana di campo',
						price: '18.00€'
					},
					{
						name: 'CROSTINI DEL RADICCHIO ROSSO',
						description: '6 gustose fette di pane condite con 6 ricette scelte per voi per farvi assaporare la tradizione romagnola',
						price: '15.00€'
					},
					{
						name: 'CECETTO',
						description: 'Crocchette di ceci con porro brasato e yogurt greco',
						price: '13.00€'
					},
				]
			},
			{
				subtitle: 'PRIMI',
				items: [
					{
						name: 'i CAPPELLETTI DELLA DISFIDA',
						description: 'con il ragù della GIOVANNA o in brodo - con i quali abbiamo vinto il premio Slow Food nel 2011',
						price: '12.00€'
					},
					{
						name: 'TAGLIOLINI allo SCALOGNO',
						description: 'con datterini rossi e gialli confit',
						price: '10.00€'
					},
					{
						name: 'i mitici CAPPELLETTI con PANNA, PROSCIUTTO CRUDO e ASPARAGI',
						price: '13.00€'
					},
					{
						name: 'STROZZAPRETI FUMÉ e NOCI',
						price: '13.00€'
					},
					{
						name: 'TAGLIATELLE AL RAGÙ',
						price: '10.00€'
					},
					{
						name: 'SPOJA LORDA con ragù di scottona al coltello',
						price: '12.00€'
					},
					{
						name: 'TAGLIATELLE RADICCHIO e TALEGGIO',
						price: '13.00€'
					},
					{
						name: 'GNOCCHI DI PATATA VIOLA',
						description: 'ai fiori di zucca, noce moscata su crema di zucchine',
						price: '14.00€'
					},
				]
			},
			{
				subtitle: 'SECONDI',
				items: [
					{
						name: 'TAGLIATA DI SCOTTONA',
						description: 'servita con sale e rosmarino',
						price: '24.00€'
					},
					{
						name: 'POLLO NOSTRANO marinato alle erbe',
						description: 'cotto alla brace e servito con verdure e patate',
						price: '18.00€'
					},
					{
						name: 'FILETTO DI MANZETTA ITALIANA',
						description: 'cucinato al Kamado e servito con contorno',
						price: '26.00€'
					},
					{
						name: 'ARROSTO DI CONIGLIO in porchetta con patate',
						price: '18.00€'
					},
					{
						name: 'PICANHA DI SCOTTONA alla griglia',
						description: 'con salsa remoulade, medaglioni di patate al rosmarino',
						price: '25.00€'
					},
					{
						name: 'ENTRECOTE DI MAIALINO «DUROC»',
						description: 'al sale dolce di Cervia e servito con patate al rosmarino',
						price: '22.00€'
					},
					{
						name: 'GRIGLIATA MISTA',
						description: 'castrato, salsiccia, pancetta, costine, tagliatina di manzo',
						price: '22.00€'
					},
					{
						name: 'SELEZIONE DI FORMAGGI',
						description: 'servito con confetture homemade e frutta secca',
						price: '20.00€'
					},
					{
						name: 'CASTRATO alla griglia - BACCHETTA e COSCIA',
						price: '20.00€'
					},
					{
						name: 'LA GRIGLIATONA DI DANILO (consigliato per 3 persone)',
						description: 'e\' pensata per tutti coloro che vogliono togliersi la VOGLIA DI CARNE, e\' una selezione delle nostre carni alla brace servite con patate al forno e verdure di stagione',
						price: '70.00€'
					},
				]
			},
			{
				subtitle: 'LA CICCIA',
				items: [
					{
						name: 'FIORENTINA «SAUDADE» ITALIANA',
						description: 'servita con i contorni cucinata al Kamado con brace di legna',
						price: '8.00€ / 100g'
					},
					{
						name: 'COSTATA «SAUDADE» ITALIANA',
						description: 'servita con i contorni cucinata al Kamado con brace di legna',
						price: '7.00€ / 100g'
					},
				]
			},
			{
				subtitle: 'CONTORNI',
				items: [
					{ name: 'le PATATE AL FORNO al profumo di rosmarino', price: '5.00€' },
					{ name: 'le PATATE FRITTE alla contadina con bucce', price: '5.00€' },
					{ name: 'le ERBETTE RIPASSATE all\'olio, aglio e peperoncino', price: '6.00€' },
					{ name: 'le VERDURE DI STAGIONE con olio alle erbe', price: '8.00€' },
					{ name: 'il RADICCHIO ROSSO con i bruciatini', price: '7.00€' },
					{ name: 'l\' INSALATA MISTA con gentilina, pomodorini e carote', price: '5.00€' },
				]
			}
		]
	},
	{
		id: 'fish',
		title: 'Pesce',
		icon: 'fish',
		sections: [
			{
				subtitle: 'ANTIPASTI',
				items: [
					{
						name: "GIROTONDO DELL'ADRIATICO (consigliato per almeno 2 persone)",
						description: 'Degustazione di antipasti freddi e caldi di pesce servito con schiacciatina',
						price: '48.00€'
					},
					{
						name: 'MISTO FREDDO DELLA CASA',
						description: 'seppia con verdure in agrodolce, sgombro marinato con verdure, gamberi al vapore con insalata di agrumi, salmone marinato al thé verde e lime, filetti di sarde nostrane marinate',
						price: '22.00€'
					},
					{
						name: 'MISTO CALDO DELLA CASA',
						description: 'polipo con crema di patate, canestrelli gratinati, gamberoni gratinati, filetti di sarde dorate al limone',
						price: '25.00€'
					},
					{
						name: 'POLPO c.b.t scottato',
						description: 'su crema di patate e zafferano con polvere di olive',
						price: '18.00€'
					},
					{
						name: 'CANESTRO MARINATO',
						description: 'e\' la nostra visione dell\'insalata di mare unendo Salmone, Sarde, Sgombro marinati da Noi!',
						price: '16.00€'
					},
					{
						name: 'TRILOGY DI CRUDO',
						description: 'carpaccio di tonno con yogurt greco e mirtillo, carpaccio di ricciola con riduzione di basilico e pomini confit, battuta di gamberi con avocado e germogli',
						price: '25.00€'
					},
				]
			},
			{
				subtitle: 'PRIMI',
				items: [
					{
						name: 'gli STROZZAPRETI ALLA PESCATORA',
						description: 'con calamari, seppia, gamberi, vongole, scampo, mazzancolla, granchio, cozze (in stagione)',
						price: '20.00€'
					},
					{
						name: 'RISOTTO alla MARINARA in bianco',
						price: '17.50€'
					},
					{
						name: 'SPAGHETTI alle VONGOLE dell\'Adriatico',
						price: '17.00€'
					},
					{
						name: 'CAPPELLACCIO',
						description: 'ripieno di burrata, gamberi e lime con bisque di gamberi e bianco di calamari',
						price: '18.00€'
					},
				]
			},
			{
				subtitle: 'SECONDI',
				items: [
					{
						name: 'il FRITTO MISTO',
						description: 'con seppia, calamari, gamberi e verdure croccanti',
						price: '20.00€'
					},
					{
						name: 'gli SPIEDINI di calamari, gamberi, mazzancolle',
						description: 'con pane profumato alle erbe di provenza',
						price: '22.00€'
					},
					{
						name: 'la GRIGLIATA MISTA',
						description: 'composta da pesce selezionato',
						price: '30.00€'
					},
					{
						name: 'TATAKI DI TONNO',
						description: 'in crosta di sesamo con salsa teriyaki, riduzione di lime e thé verde e valeriana di campo',
						price: '20.00€'
					},
					{
						name: 'i CALAMARI arrostiti su coulis di pomodoro fresco, zeste di limone e misticanza',
						price: '18.00€'
					},
					{
						name: 'TRANCIO DI RICCIOLA scottato',
						description: 'servito con patate schiacciate al limone',
						price: '22.00€'
					},
				]
			},
			{
				subtitle: 'CONTORNI',
				items: [
					{ name: 'le PATATE AL FORNO al profumo di rosmarino', price: '5.00€' },
					{ name: 'le PATATE FRITTE alla contadina con bucce', price: '5.00€' },
					{ name: 'le ERBETTE RIPASSATE all\'olio, aglio e peperoncino', price: '6.00€' },
					{ name: 'le VERDURE DI STAGIONE con olio alle erbe', price: '8.00€' },
					{ name: 'il RADICCHIO ROSSO con i bruciatini', price: '7.00€' },
					{ name: 'l\' INSALATA MISTA con gentilina, pomodorini e carote', price: '5.00€' },
				]
			}
		]
	},
	{
		id: 'pizza',
		title: 'Pizza',
		icon: 'pizza',
		sections: [
			{
				subtitle: 'ISPIRATE ALLA CITTÀ',
				items: [
					{
						name: 'RAVENNA NEL CUORE',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Cappelletti al Ragù, Grana 20 mesi a scaglie',
						price: '12.00€'
					},
					{
						name: 'TEODORICO',
						description: 'Crema di Parmigiano, Mozzarella fior di latte, Guanciale di Modena, Uovo all\'occhio di bue, Grana 20 mesi a scaglie',
						price: '12.00€'
					},
					{
						name: 'BIZANTINA',
						description: 'Mozzarella fior di latte, Salsiccia, Erbette ripassate a.o.p., Olive taggiasche',
						price: '11.00€'
					},
					{
						name: 'SANT\'APOLLINARE',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Burrata pugliese, Crema di Basilico, Prosciutto Crudo delle Saline 20 mesi',
						price: '13.00€'
					},
					{
						name: 'PICCANTINA',
						description: 'Macchie di Pomodoro, Friarielli, Salame piccante e in uscita Stracciatella pugliese, Mandorle',
						price: '14.00€'
					},
					{
						name: 'SFIZIOSA',
						description: 'Crema di Basilico, Pomodorini, Prosciutto Crudo delle Saline 20 mesi, Grana 20 mesi a scaglie',
						price: '14.00€'
					},
					{
						name: 'GALLA PLACIDIA',
						description: 'Erbette a.o.p., Pomodorini, Bruciatini e Bufala DOP',
						price: '13.00€'
					},
					{
						name: 'REGINA',
						description: 'Pomodoro di Pompei e in uscita Bufala DOP, Datterino, Basilico',
						price: '13.00€'
					},
				]
			},
			{
				subtitle: 'PIZZE GOURMET',
				items: [
					{
						name: 'LUPO DI MARE',
						description: 'Pomodoro di Pompei, Tonno, Olive taggiasche e in uscita Stracciatella pugliese, Alici e Origano',
						price: '10.00€'
					},
					{
						name: 'PARMA',
						description: '4 Formaggi, Porcini e in uscita Prosciutto Crudo, Stracciatella',
						price: '12.00€'
					},
					{
						name: 'BOLOGNA',
						description: 'Mozzarella e in uscita Mortadella, Stracciatella, Pistacchio e Pepe',
						price: '12.00€'
					},
				]
			},
			{
				subtitle: 'LE ALTRE PIZZE...',
				items: [
					{
						name: 'DIAVOLA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Salame piccante',
						price: '8.00€'
					},
					{
						name: 'MELAGRANA',
						description: 'Pomodoro di Pompei, Bufala Dop, Melanzane, Prosc. Cotto, Grana 20 mesi a scaglie',
						price: '12.00€'
					},
					{
						name: 'MERIDIONALE',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Capperi, Acciughe, Olive, Origano',
						price: '9.00€'
					},
					{
						name: 'RADICCHIO PANCETTA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Radicchio Rosso, Pancetta',
						price: '9.00€'
					},
					{
						name: 'WÜRSTEL PATATE FRITTE',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Würstel, Patate fritte',
						price: '9.00€'
					},
					{
						name: 'VEGETARIANA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Verdure miste',
						price: '10.50€'
					},
					{
						name: 'VANITOSA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Radicchio, Speck, Rucola, Grana 20 mesi a scaglie',
						price: '11.00€'
					},
					{
						name: 'TIROLESE',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Gorgonzola, Speck in forno, Patate al forno',
						price: '10.50€'
					},
					{
						name: 'SICILIANA',
						description: 'Pomodoro di Pompei, Bufala DOP, Melanzane, Cipolla, Olive, Origano',
						price: '10.50€'
					},
					{
						name: 'PANCETTOSA',
						description: 'Pomodoro di Pompei, Bufala DOP, Pancetta, Pomini',
						price: '10.00€'
					},
					{
						name: 'CAMPAGNOLA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Friarielli, Salsiccia, Patate la forno',
						price: '10.00€'
					},
					{
						name: 'GIOVANNA',
						description: 'Mozzarella fior di latte, Patate al forno, Pancetta della Giovanna, Rucola',
						price: '11.00€'
					},
					{
						name: 'MONTANARA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Patate al forno, Porcini, Gorgonzola, Salsiccia',
						price: '11.00€'
					},
					{
						name: 'CALABRESE',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Bufala DOP, Salame picc, Salsiccia, Grana 20 mesi a scaglie',
						price: '11.00€'
					},
					{
						name: 'TONNARA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Tonno, Cipolla, Olive nere',
						price: '10.50€'
					},
					{
						name: 'CAPRICCIOSA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Funghi, Prosc.cotto, Carciofi, Olive',
						price: '10.50€'
					},
					{
						name: 'QUATTRO STAGIONI',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte, Funghi, Prosc.cotto, Salsiccia, Carciofi',
						price: '10.50€'
					},
					{
						name: 'DELIZIOSA',
						description: 'Pomodoro di Pompei, Mozzarella fior di latte e in uscita Pomini, Bufala DOP, Olio evo, Basilico',
						price: '10.00€'
					},
					{
						name: 'SCHIACCIATINA',
						price: '3.00€'
					},
				]
			}
		]
	},
	{
		id: 'dessert',
		title: 'Dolci',
		icon: 'dessert',
		sections: [
			{
				subtitle: 'DESSERT DI NOSTRA PRODUZIONE',
				items: [
					{
						name: 'DELIZIA DI FROLLA',
						description: 'con zabaione, pera caramellata e polvere di caffé',
						price: '8.00€'
					},
					{
						name: 'CREMINO AL PISTACCHIO',
						description: 'variegato alle amarene Fabbri',
						price: '8.00€'
					},
					{
						name: 'CHEESE CAKE NEL BICCHIERE',
						description: 'con lamponi e crumble di arachidi salati',
						price: '7.00€'
					},
					{
						name: 'FORESTA NERA',
						description: 'pan di spagna al cioccolato, crema chantilly, amarene Fabbri',
						price: '7.00€'
					},
					{
						name: 'TENERINA',
						description: 'con mascarpone e mandorle pralinate',
						price: '7.00€'
					},
					{
						name: 'MASCARPONE',
						description: 'classico con cioccolato a scaglie e sfera al caramello',
						price: '6.50€'
					},
					{
						name: 'MACEDONIA DI FRUTTA FRESCA',
						description: 'con crumble ai frutti di bosco e gelato alla vaniglia',
						price: '7.00€'
					},
					{
						name: 'SORBETTO FRAGOLA E MENTA',
						price: '5.00€'
					},
					{
						name: 'SORBETTO ZENZERO E LIMONE',
						price: '6.00€'
					},
					{
						name: 'SORBETTO AL LIMONE',
						price: '4.00€'
					},
					{
						name: 'SORBETTO AL CAFFÈ',
						price: '4.00€'
					},
					{
						name: 'GELATI DI NOSTRA PRODUZIONE',
						description: 'chiedici i gusti perche\' allo chef piace cambiare',
						price: '6.00€'
					},
				]
			}
		]
	},
	{
		id: 'children',
		title: 'Bambini',
		icon: 'children',
		sections: [
			{
				subtitle: 'MENÙ BIMBI',
				items: [
					{
						name: 'MENÙ PUMBAA',
						description: 'Cappelletti al ragù, salsiccia e patate fritte',
						price: '15.00€'
					},
					{
						name: 'MENÙ TIMON',
						description: 'Strozzapreti pasticciati, cotoletta e patate fritte',
						price: '15.00€'
					},
				]
			}
		]
	},
	{
		id: 'drinks',
		title: 'Bevande',
		icon: 'drinks',
		sections: [
			{
				subtitle: 'BEVANDE',
				items: [
					{ name: 'ACQUA 0,75 Lt', price: '2.50€' },
					{ name: 'COCA COLA ALLA SPINA 0,30 Lt', price: '3.00€' },
					{ name: 'COCA COLA ALLA SPINA 0,50 Lt', price: '5.50€' },
					{ name: 'COCA COLA ALLA SPINA 1 Lt', price: '12.00€' },
					{ name: 'COCA COLA, COCA ZERO, FANTA, SPRITE bott. 0,33 Lt', price: '3.00€' },
					{ name: 'THÉ ALLA PESCA, AL LIMONE in lattina 0,33 Lt', price: '3.00€' },
				]
			},
			{
				subtitle: 'BIRRA',
				items: [
					{ name: 'BIRRA STELLA ARTOIS 0,20 Lt', price: '3.00€' },
					{ name: 'BIRRA STELLA ARTOIS 0,40 Lt', price: '5.50€' },
					{ name: 'BIRRA STELLA ARTOIS 1 Lt', price: '12.00€' },
					{ name: 'BIRRA ROSSA LEFFE 0,33 Lt', price: '4.50€' },
					{ name: 'BIRRA ROSSA LEFFE 0,50 Lt', price: '7.00€' },
					{ name: 'BIRRA ROSSA LEFFE 1 Lt', price: '15.00€' },
					{ name: 'BIRRA BOTT. «PORETTI 4 LUPPOLI» 0,66 Lt', price: '5.00€' },
					{ name: 'BIRRA BOTT. «FORST» 0,66 Lt', price: '5.00€' },
					{ name: 'FRANZISKANER WEISSBIER 0,5 Lt', price: '5.00€' },
					{ name: 'BIRRA BOTT. «ICHNUSA NON FILTRATA» 0,5 Lt', price: '5.00€' },
					{ name: 'BIRRA BOTT. «MESSINA» 0,5 Lt', price: '5.00€' },
					{ name: 'BIRRA BOTT. GLUTEN FREE / ANALCOLICA 0,33 Lt', price: '4.00€' },
				]
			},
			{
				subtitle: 'VINO',
				items: [
					{ name: 'VINO DELLA CASA BIANCO/ROSSO 1/4 Lt', price: '3.00€' },
					{ name: 'VINO DELLA CASA BIANCO/ROSSO 1/2 Lt', price: '5.50€' },
					{ name: 'VINO DELLA CASA BIANCO/ROSSO 1 Lt', price: '12.00€' },
				]
			},
			{
				subtitle: 'ALTRO',
				items: [
					{ name: 'CAFFÈ', price: '1.50€' },
					{ name: 'CORRETTO / DECAFFEINATO', price: '2.00€' },
					{ name: 'AMARI / LIQUORI', price: '4.00€' },
					{ name: 'GRAPPE SELEZIONATE', price: '5.00€' },
				]
			}
		]
	}
];

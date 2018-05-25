/*
var fips = {
	AK:  2, AL:  1, AR:  5, AS: 60, AZ:  4, CA:  6,
	CO:  8, CT:  9, DC: 11, DE: 10, FL: 12, GA: 13,
	GU: 66, HI: 15, IA: 19, ID: 16, IL: 17, IN: 18,
	KS: 20, KY: 21, LA: 22, MA: 25, MD: 24, ME: 23,
	MI: 26, MN: 27, MO: 29, MS: 28, MT: 30, NC: 37,
	ND: 38, NE: 31, NH: 33, NJ: 34, NM: 35, NV: 32,
	NY: 36, OH: 39, OK: 40, OR: 41, PA: 42, PR: 72,
	RI: 44, SC: 45, SD: 46, TN: 47, TX: 48, UT: 49,
	VA: 51, VI: 78, VT: 50, WA: 53, WI: 55, WV: 54, WY: 56
};
var mapfips = x => x.map(y => fips[y]);
*/
var mapdata = {
	"regions": [	
		{
			"parent": "Northeast",
			"name": "New England",
			"id": "1A",
			"color": 1,
			// "label": [22, 20],
			"label": [68, 37],
			"map": "us",
			"children": [
				// ME, NH, VT, MA, CT, RI
				23, 33, 50, 25, 9, 44
			]
		},
		{
			"parent": "Northeast",
			"name": "New York",
			"id": "1B",
			"color": 2,
			"label": [14, 5],
			"map": "us",
			"children": [
				// NY north
				36001, 36003, 36007, 36009, 36011, 36013, 36015, 36017, 36019, 36021, 36023, 36025, 36029, 36031, 36033, 36035, 36037, 36039, 36041, 36043, 36045, 36049, 36051, 36053, 36055, 36057, 36063, 36065, 36067, 36069, 36073, 36075, 36077, 36083, 36089, 36091, 36093, 36095, 36097, 36099, 36101, 36107, 36109, 36113, 36115, 36117, 36121, 36123,
			]
		},
		{
			"parent": "Mid-Atlantic",
			"name": "Northern",
			"id": "2A",
			"color": 3,
			"label": [105, 21],
			"map": "us",
			"children": [
				// NY south
				36005, 36047, 36059, 36061, 36071, 36079, 36081, 36085, 36087, 36103, 36119,
				36027, 36105, 36111,
				// PA east
				42001, 42011, 42015, 42017, 42025, 42027, 42029, 42035, 42037, 42041, 42043, 42045, 42055, 42057, 42061, 42067, 42069, 42071, 42075, 42077, 42079, 42081, 42087, 42089, 42091, 42093, 42095, 42097, 42099, 42101, 42103, 42105, 42107, 42109, 42113, 42115, 42117, 42119, 42127, 42131, 42133,
				// MD no handle
				24003, 24005, 24009, 24011, 24013, 24015, 24017, 24019, 24021, 24025, 24027, 24029, 24031, 24033, 24035, 24037, 24039, 24041, 24043, 24045, 24047, 24510,
				// DC, DE, NJ
				11, 10, 34
			]
		},
		{
			"parent": "Mid-Atlantic",
			"name": "Southern",
			"id": "2B",
			"color": 4,
			// "label": [27, -7],
			"label": [137, -7],
			"map": "us",
			"children": [
				// VA, NC
				51, 37,
				// TN east
				47019, 47059, 47073, 47091, 47163, 47171, 47179
			]
		},
		{
			"parent": "South",
			"name": "Upper",
			"id": "3A",
			"color": 5,
			"label": [20, 5],
			"map": "us",
			"children": [
				// KY
				21,
				// TN west
				47001, 47003, 47005, 47007, 47009, 47011, 47013, 47015, 47017, 47021, 47023, 47025, 47027, 47029, 47031, 47033, 47035, 47037, 47039, 47041, 47043, 47045, 47047, 47049, 47051, 47053, 47055, 47057, 47061, 47063, 47065, 47067, 47069, 47071, 47075, 47077, 47079, 47081, 47083, 47085, 47087, 47089, 47093, 47095, 47097, 47099, 47101, 47103, 47105, 47107, 47109, 47111, 47113, 47115, 47117, 47119, 47121, 47123, 47125, 47127, 47129, 47131, 47133, 47135, 47137, 47139, 47141, 47143, 47145, 47147, 47149, 47151, 47153, 47155, 47157, 47159, 47161, 47165, 47167, 47169, 47173, 47175, 47177, 47181, 47183, 47185, 47187, 47189
			]
		},
		{
			"parent": "South",
			"name": "Deep South",
			"id": "3B",
			"color": 6,
			"label": [30, 20],
			"map": "us",
			"children": [
				// AL, GA, SC
				1, 13, 45,
				// FL handle
				12033, 12059, 12063, 12091, 12113, 12131, 12133
			]
		},
		{
			"parent": "South",
			"name": "Florida",
			"id": "3C",
			"color": 7,
			"label": [33, 40],
			"map": "us",
			"children": [
				// FL south
				12001, 12003, 12005, 12007, 12009, 12011, 12013, 12015, 12017, 12019, 12021, 12023, 12027, 12029, 12031, 12035, 12037, 12039, 12041, 12043, 12045, 12047, 12049, 12051, 12053, 12055, 12057, 12061, 12065, 12067, 12069, 12071, 12073, 12075, 12077, 12079, 12081, 12083, 12085, 12086, 12087, 12089, 12093, 12095, 12097, 12099, 12101, 12103, 12105, 12107, 12109, 12111, 12115, 12117, 12119, 12121, 12123, 12125, 12127, 12129
			]
		},
		{
			"parent": "South",
			"name": "LaTex",
			"id": "4A",
			"color": 8,
			"label": [60, 0],
			"map": "us",
			"children": [
				// TX, LA
				48, 22
			]
		},
		{
			"parent": "West",
			"name": "S. California",
			"id": "5A",
			"color": 9,
			"label": [25, 8],
			"map": "us",
			"children": [
				// CA south
				6025, 6029, 6037, 6059, 6065, 6071, 6073, 6079, 6083, 6111,
				// NV south
				// 32003,
				// AZ east
				// 4012, 4013, 4015, 4019, 4021, 4023, 4025, 4027
			]
		},
		{
			"parent": "West",
			"name": "N. California",
			"id": "5B",
			"color": 10,
			"label": [10, 50],
			"map": "us",
			"children": [
				// CA north
				6001, 6003, 6005, 6007, 6009, 6011, 6013, 6015, 6017, 6019, 6021, 6023, 6027, 6031, 6033, 6035, 6039, 6041, 6043, 6045, 6047, 6049, 6051, 6053, 6055, 6057, 6061, 6063, 6067, 6069, 6075, 6077, 6081, 6085, 6087, 6089, 6091, 6093, 6095, 6097, 6099, 6101, 6103, 6105, 6107, 6109, 6113, 6115,
			]
		},
		{
			"parent": "West",
			"name": "Pacific Northwest",
			"id": "6A",
			"color": 11,
			"label": [0, 0],
			"map": "us",
			"children": [
				// WA, OR, ID
				53, 16, 41
			]
		},
		{
			"parent": "West",
			"name": "Rocky Mountains",
			"id": "6B",
			"color": 12,
			"label": [0, 0],
			"map": "us",
			"children": [
				// UT, CO
				49, 8
			]
		},
		{
			"parent": "Midwest",
			"name": "Great Plains",
			"id": "7A",
			"color": 13,
			"label": [0, 0],
			"map": "us",
			"children": [
				// KS, OK
				20, 40
			]
		},
		{
			"parent": "Midwest",
			"name": "Missouri",
			"id": "7B",
			"color": 14,
			"label": [0, 21],
			"map": "us",
			"children": [
				// MO
				29
			]
		},
		{
			"parent": "Midwest",
			"name": "Upper Midwest",
			"id": "8A",
			"color": 15,
			"label": [-20, 60],
			"map": "us",
			"children": [
				// MN, WI, IA
				27, 55, 19,
				// SD east
				46099, 46083,
				// MI north
				26003, 26013, 26033, 26041, 26043, 26053, 26061, 26071, 26083, 26095, 26097, 26103, 26109, 26131, 26153,
			]
		},
		{
			"parent": "Midwest",
			"name": "Central",
			"id": "8B",
			"color": 16,
			"label": [0, 30],
			"map": "us",
			"children": [
				// IL
				17,
				// 17015, 17067, 17071, 17073, 17085, 17131, 17141, 17161, 17177, 17187, 17195, 17201,
				// 17001, 17003, 17005, 17007, 17009, 17011, 17013, 17017, 17019, 17021, 17023, 17025, 17027, 17029, 17031, 17033, 17035, 17037, 17039, 17041, 17043, 17045, 17047, 17049, 17051, 17053, 17055, 17057, 17059, 17061, 17063, 17065, 17069, 17075, 17077, 17079, 17081, 17083, 17087, 17089, 17091, 17093, 17095, 17097, 17099, 17101, 17103, 17105, 17107, 17109, 17111, 17113, 17115, 17117, 17119, 17121, 17123, 17125, 17127, 17129, 17133, 17135, 17137, 17139, 17143, 17145, 17147, 17149, 17151, 17153, 17155, 17157, 17159, 17163, 17165, 17167, 17169, 17171, 17173, 17175, 17179, 17181, 17183, 17185, 17189, 17191, 17193, 17197, 17199, 17203,
				// IN
				18
				// 18073, 18051, 18089, 18091, 18111, 18123, 18127, 18129, 18147, 18149, 18163, 18173,
			]
		},
		{
			"parent": "Midwest",
			"name": "Eastern",
			"id": "8C",
			"color": 17,
			"label": [10, 30],
			"map": "us",
			"children": [
				// MI south
				26001, 26005, 26007, 26009, 26011, 26015, 26017, 26019, 26021, 26023, 26025, 26027, 26029, 26031, 26035, 26037, 26039, 26045, 26047, 26049, 26051, 26055, 26057, 26059, 26063, 26065, 26067, 26069, 26073, 26075, 26077, 26079, 26081, 26085, 26087, 26089, 26091, 26093, 26099, 26101, 26105, 26107, 26111, 26113, 26115, 26117, 26119, 26121, 26123, 26125, 26127, 26129, 26133, 26135, 26137, 26139, 26141, 26143, 26145, 26147, 26149, 26151, 26155, 26157, 26159, 26161, 26163, 26165,
				// OH
				39,
				// PA west
				42003, 42005, 42007, 42009, 42013, 42019, 42021, 42023, 42031, 42033, 42039, 42047, 42049, 42051, 42053, 42059, 42063, 42065, 42073, 42083, 42085, 42111, 42121, 42123, 42125, 42129,
				// IN
				// 18001, 18003, 18005, 18007, 18009, 18011, 18013, 18015, 18017, 18019, 18021, 18023, 18025, 18027, 18029, 18031, 18033, 18035, 18037, 18039, 18041, 18043, 18045, 18047, 18049, 18083, 18053, 18055, 18057, 18059, 18061, 18063, 18065, 18067, 18069, 18071, 18075, 18077, 18079, 18081, 18085, 18087, 18093, 18095, 18097, 18099, 18101, 18103, 18105, 18107, 18109, 18113, 18115, 18117, 18119, 18121, 18125, 18131, 18133, 18135, 18137, 18139, 18141, 18143, 18145, 18151, 18153, 18155, 18157, 18159, 18161, 18165, 18167, 18169, 18171, 18175, 18177, 18179, 18181, 18183,
				// WV north
				54009, 54029, 54051, 54069,
			]
		},
		{
			"parent": "Canada",
			"name": "",
			"id": "CA",
			"color": 18,
			"label": [0, 10],
			"map": "ca",
			"children": [
				3501, 3502, 3506, 3507, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3528, 3529, 3530, 3531, 3532, 3534, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3546, 3547,
				2456, 2457, 2458, 2459, 2460, 2461, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477,
				// 5915,
			]
		},
		{
			"parent": "UK",
			"name": "",
			"id": "UK",
			"color": 19,
			"label": [15, 25],
			"map": "uk",
			"children": [
				'ENG', 'SCT', 'WLS', 'NIR',
			]
		}
	],
}

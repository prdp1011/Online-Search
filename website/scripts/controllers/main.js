app.controller('main', function ($scope, $http) {
	$scope.timeArray = [];
	$scope.style = {};
	$scope.products = [{
		itemId: 1011, apptFlag=false, "name": "Dr. Priya's Skin & Hair Clinic",
		"prof": "Dermatology Clinic", "address": "35/1, 1st Floor, CRM Sowbhagya Enclave, HAL Airport - Varthur Main Road, Landmark: Near Spice Garden Bus Stop, Near Fasos, BangaloreGet Directions"
	}
		, {
		itemId: 1012, apptFlag=false,
		"name": "Dr. Dutta Roys Skin & Hair Clinic",
		"prof": "B.Sc, MBBS, DDV, MD - Dermatology", "address": "5, 6, Sadath Court, Magrath Road, Landmark: Opposite Garuda Mall, Bangalore the quality of treatment and patients’ safety. He is very well known for his clinical skills."
	},
	{
		itemId: 1013, apptFlag=false, 
		"name": "Dr. kin & Hair Clinic Parthasarathi Dutta Roy",
		"prof": "Dermatologist, Trichologist, Cosmetologist, 14 Years Experience", "address": "Parthasarathi Dutta Roy is Dermatologist in Bangalore- is dedicated to the field of Dermatology, Cosmetology, Trichology and Aesthetic Treatments. Under his able guidance and sharp observations, we never compromise with the quality of treatment and patients’ safety. He is very well known for his clinical skills."
	}, {
		itemId: 1015,apptFlag=false,
		"name": "Dr. Parthasarathi Dutta Roy",
		"prof": "Cosmetologist Clinic", "address": "dedicated to the field of Dermatology, Cosmetology, Trichology and Aesthetic Treatments. Under his able guidance and sharp observations, we never compromise with the quality of treatment and patients’ safety. He is very well known for his clinical skills."
	}
		, {
		itemId: 1016, apptFlag=false, "name": "Dr. Janet Alexander Castelino",
		"prof": "Trichologist Clinic", "address": "Janet Alexander Castelino has done her MBBS from Kasturba Medical College, Mangalore, and her MD Dermatology from Manipal Hospital, Bangalore. She is a Consultant Dermatologist with experience in Clinical Dermatology, Cosmetic Dermatology, Dermatologic Surgery and Lasers in Dermatology. She is available at Cosderma Clinic in HSR layout. Cosderma Clinic offers excellent solutions to all dermatology and cosmetology-related concerns. She is associated with Hosmat Hospital Magrath Road, and Shanthi Nursing Home, Jayanagar. Dr. Janet is associated with Indian Association of Dermatologists, Venereologists & Leprologists (IADVL) and Bangalore Dermatology Society (BDS)"
	}];
	$scope.search = function () {
		console.log($scope.customSelected);
	}
	$scope.chosed = "Dentist";
	$scope.callApptTime = function (arg) {
		console.log(arg);
		arg['apptFlag'] = !arg.apptFlag;

		console.log($scope.timeArray);
	}


	$scope.today = new Date();


	var myDate = new Date();

	//add a day to the date

	// var timeArray = [];
	var d = new Date(),
		h = 09,
		m = 45,
		meridiem = ['AM', 'PM'];
	for (var i = h; i < 24; ++i) {
		for (var j = i == h ? Math.ceil(m / 15) : 0; j < 4; ++j) {
			if (i % 12 == 0)
				$scope.timeArray.push({ 'time': '12' + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0], isSelected: false });
			else
				$scope.timeArray.push({ 'time': i % 12 + ':' + (j * 15 || '00') + ' ' + meridiem[i / 12 | 0], isSelected: false });
		}
	}
	$scope.timeArray.forEach(function (t, i) {
		if (i < 5)
			t['deleted'] = true;
		else
			t['deleted'] = false;
	})

	$scope.checkTime = function (i, d) {
		var f = new Date(d);
		console.log(i);
		i.deleted = true;
		i.isSelected = true;
		if (i.deleted) {
			$scope.style = {};
		}
		console.log(f);
	}
	$scope.products.forEach(function (d) {
		d['timeArray'] = $scope.timeArray;
		d['date'] = myDate.setDate(myDate.getDate() + 1);
	})

	console.log($scope.products);

})
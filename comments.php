<?php
// connect with your dbConnect.inc (to access database)
//db connect 4 folders back inside home folder
// ...home/sites/240/exercise/ex07
$path = '../../../';
require $path . 'dbConnect.inc';

if ($mysqli) {
	//prepared statements to fight against sql injection
	//is name box filled in && if message is filled out, both have to be true
	if (isset($_GET['name']) && isset($_GET['message'])) {
		//overcautious don't want to see just a space inside name and message
		if ($_GET['name'] != '' && $_GET['message'] != '') {
			//1 prepare my query
			//only inserting into name and message, not id or date
			$stmt = $mysqli->prepare("INSERT INTO finalComments(name, message) values(?,?)");

			//2 bind command, bind parameters for ?s
			//what kind of data is coming into the values?
			//ss 1st parameter is string, 2nd parameter is string
			//then follow up with variables
			$stmt->bind_param("ss", $_GET['name'], $_GET['message']); 

			//3 execute, run the statement, do the insertion to the database
			$stmt->execute();

			//4 close database
			$stmt->close();
		}

		//accomplished getting the data into the database
		//now we go through the loop and select it all to repopulate records
		
	}
	


	//write sql statement to get contents of table and send back
	//we need to read name & comment, dont need other comments unless we want it
	$sql = "SELECT name, message FROM finalComments";
	//res is the result set we get back, pointer to our data if sql is right
	//kinda in java where we use a period but in php we use arrow
	//$mysqli is the object (hopefully true) 
	//query is the method. means to run SELECT
	$res = $mysqli->query($sql); 

	if($res){
		//$rowHolder is an array, $records is 2d array
		//what we fetch from the database will go inside $rowHolder
		//mysqli_fetch_array fetching the first name and comment
		//MYSQLI_ASSOC is an associative array that uses names for subscripts
		while($rowHolder = mysqli_fetch_array($res,MYSQLI_ASSOC)){ // $rowHolder['name'] $rowHolder['comment']
			$records[] = $rowHolder;                               // $records[ ]['name']['comment']
			//will automatically increment up, knows to find the next available row
			//$rowHolder[0]['name']['comment'] = anonymous | wow you're so cool
			//$rowHolder[1]['name']['comment'] = anonymous | wow! amazing!
			//put in $records array bcos $rowHolder keeps getting used
			//$records[0]['name']['comment'] = anonymous | wow you're so cool
			//$records[1]['name']['comment'] = anonymous | wow! amazing!
		}
		//var_dump($records); //Used to debug your while loop. Display the database table comments
	}
}

else {
	echo "something wrong";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>240 DB Insert 2020  Version 1</title>
	<link rel="stylesheet" href="./assets/css/comments.css">
    <script src="./assets/script/comments.js"></script>
</head>

<body>
	
	<div class="container">
		<div class="content">
			<div class="msgbox">
				<h2>previous messages</h2>
				<table>
					<?php
					//go thru $records until nothing in it
					//each individual record is $this_row
					//print
					foreach($records as $this_row) {
						//can use html in php
						echo '<tr><td class="from">' . $this_row['name'] . ": " . '</td><td>' . $this_row['message'] . '</td>
						</tr>';
					} 
					?>
				</table>
			</div>

			<div class="databox">
				<h2>got a message?</h2>
				<form action="comments.php" method="GET" onsubmit="return validateForm();">
					<p class="label">name</p>
					<input type="text" class="data" id="name" name="name" width="40" placeholder="Enter Your name" />
					<p class="label">message</p>
					<textarea id="message" class="data" name="message" cols="40" rows="10"></textarea>
					<input type="submit" class="submit_button" value="Add to the List"/>
				</form>
			</div>
		</div>
		<div class="date">
			<!-- GET Date from operating System -->
			<?php
				$filename = 'index.php';
				if (file_exists($filename)) {
					echo "Last modified: " . date ("l, F d Y h:ia", filemtime($filename));
				}
			?>
		</div>

	</div>

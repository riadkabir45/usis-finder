IFS='
'

clnser(){
echo "["
for data in `cat data.csv`
do
	sid=`echo $data|cut -d ',' -f 1`
	id=`echo $data|cut -d ',' -f 2`
	prog=`echo $data|cut -d ',' -f 3`
	name=`echo $data|cut -d ',' -f 4`
	echo $sid
done
echo "]"
}

clnser

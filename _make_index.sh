BASE=`pwd`
for dir in `find $BASE -type d`; do
	cd $dir
	ls $dir | egrep -v '(.*\.md$)|(^_.*)|(index.html)' | \
	perl -e 'print "<html><body><ul>"; while(<>) { chop $_;  print "<li><a href=\"./$_\">$_</a></li>";} print "</ul></body></html>"' > $dir/index.html
done


using System;
using System.Threading;
while (true)
{
    Console.WriteLine($"It is {DateTime.Now}");
    Thread.Sleep(TimeSpan.FromSeconds(1));
}

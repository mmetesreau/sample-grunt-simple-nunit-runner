using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WhereIs
{
    [TestFixture]
    public class WhereIsShould
    {
        [Test]
        public void Anwser_Kitchen_When_We_Ask_Brian()
        {
            Assert.AreEqual("Kitchen", "Kitchen");
        }

        [Test]
        public void Anwser_Its_Raining_Today_When_We_Ask_My_Umbrella()
        {
            Assert.AreEqual("Kitchen", "It's raining today");
        }
    }
}
